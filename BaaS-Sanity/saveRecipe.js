import { createClient } from '@sanity/client';
import { PROJECT_ID, SANITY_WRITE_TOKEN } from './env'

const projectId = PROJECT_ID
const sanityWriteToken = SANITY_WRITE_TOKEN

export const writeClient = createClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2023-03-01',
    token: sanityWriteToken,
    useCdn: true
});