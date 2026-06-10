// Sanity Studio configuration — the editing UI mounted at /admin
// (loaded by @sanity/astro; content schemas live in src/sanity/schemaTypes)
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

// The Studio is embedded in the site itself, so the preview target is always
// the Studio's own origin (works on any dev port and in production alike).
// Note: this file runs in the browser — never reference process.env here.
const previewUrl = typeof location !== 'undefined' ? location.origin : 'http://localhost:3002';

export default defineConfig({
  name: 'koios',
  title: 'Koios',
  projectId: 'lw88pa2w',
  dataset: 'production',
  plugins: [
    structureTool(),
    presentationTool({
      name: 'presentation',
      title: 'Preview',
      previewUrl,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
