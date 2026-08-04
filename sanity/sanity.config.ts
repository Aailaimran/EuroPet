import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'euro-pet-express',
  title: 'Euro Pet Express — Website Editor',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

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
            S.listItem()
              .title('🗺️ Routes Page')
              .child(
                S.document()
                  .schemaType('routesPage')
                  .documentId('routesPage')
              ),
            S.listItem()
              .title('🐾 Our Services')
              .child(
                S.document()
                  .schemaType('servicesPage')
                  .documentId('servicesPage')
              ),
            S.listItem()
              .title('🐕 Rescue a Dog')
              .child(
                S.document()
                  .schemaType('rescuePage')
                  .documentId('rescuePage')
              ),
            S.listItem()
              .title('👤 About Us')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
            S.listItem()
              .title('📋 Compliance')
              .child(
                S.document()
                  .schemaType('compliancePage')
                  .documentId('compliancePage')
              ),
            S.listItem()
              .title('📞 Contact Page')
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('contactPage')
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
    media(),
  ],

  schema: { types: schemaTypes },
})
