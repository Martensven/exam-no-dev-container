import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { PROJECT_ID } from './env'

const projectId = PROJECT_ID

export default defineConfig({
  name: 'default',
  title: 'js3-exam-sanity',

  projectId: projectId,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
