// Sanity CLI configuration — lets `npx sanity <cmd>` know which project this repo belongs to
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'lw88pa2w',
    dataset: 'production',
  },
});
