import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'euro-pet-express',
  title: 'Euro Pet Express — Website Editor',
  
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('🏠 Home Page')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.divider(),
            S.listItem()
              .title('🚐 Transport Routes')
              .schemaType('route')
              .child(
                S.documentTypeList('route')
                  .title('All Transport Routes')
              ),
            S.listItem()
              .title('🐶 Rescue Dogs')
              .schemaType('rescueDog')
              .child(
                S.documentTypeList('rescueDog')
                  .title('Dogs Available for Rescue')
              ),
            S.divider(),
            S.listItem()
              .title('⚙️ Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
