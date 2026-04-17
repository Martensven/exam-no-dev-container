import { createClient } from '@sanity/client'
import { SANITY_WRITE_TOKEN, PROJECT_ID } from './env.jsx'

export const client = createClient({
    projectId: PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: SANITY_WRITE_TOKEN,
    useCdn: false,
})

export default client

