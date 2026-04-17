import {defineCliConfig} from 'sanity/cli'
import { PROJECT_ID } from './env'

const projectId = PROJECT_ID

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
