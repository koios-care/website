// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// astro.config runs before Astro's own .env handling — load it explicitly
// (process.env alone misses .env files here)
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const isVisualEditing =
  (env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED ?? process.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED) === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://koios.care',
  integrations: [
    sanity({
      projectId: 'lw88pa2w',
      dataset: 'production',
      useCdn: false, // static site — fetch fresh content at build time
      studioBasePath: '/admin', // Sanity Studio lives at koios.care/admin
      // Stega encodes field-level source maps into strings so the VisualEditing
      // overlay knows which Studio field to open on click. Only active when
      // visual-editing preview mode is on — never baked into the production build.
      ...(isVisualEditing
        ? {
            resultSourceMap: 'withKeyArraySelector',
            stega: { enabled: true, studioUrl: '/admin' },
          }
        : {}),
    }),
    react(),
  ],
  vite: {
    optimizeDeps: {
      // Pre-bundle the embedded Studio's dependency graph up front.
      // Without this, Vite discovers these on the first /admin load and
      // re-optimizes mid-session — invalidating module hashes under the
      // open tab ("Failed to fetch dynamically imported module: pane2-…").
      include: [
        'sanity',
        'sanity/structure',
        'sanity/presentation',
        '@sanity/vision',
        '@sanity/visual-editing',
        // @sanity packages deep-import CJS lodash with ESM default imports —
        // these only work when Vite pre-bundles them (full sweep of the chain)
        'lodash/deburr.js',
        'lodash/groupBy.js',
        'lodash/isObject.js',
        'lodash/keyBy.js',
        'lodash/partition.js',
        'lodash/sortedIndex.js',
        'react-dom/client',
        // visual-editing 5.x is compiled with the React Compiler — its CJS
        // runtime needs pre-bundling for the named `c` export to resolve
        'react/compiler-runtime',
        'react/jsx-runtime',
        'styled-components',
      ],
    },
  },
});
