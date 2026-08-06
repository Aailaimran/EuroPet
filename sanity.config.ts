'use client'

/**
 * This configuration is used for the Sanity Studio mounted on the `app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Import environment variables
import { dataset, projectId } from './sanity/env'
// Import real schemas from the source
import { schemaTypes } from './sanity/schemas'
// Import the custom desk structure
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'euro-pet-express',
  title: 'Euro Pet Express — Website Editor',
  projectId,
  dataset,
  
  schema: {
    types: schemaTypes,
  },
  
  plugins: [
    structureTool({ structure }),
  ],
})
