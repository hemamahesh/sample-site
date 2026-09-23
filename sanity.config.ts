import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { post } from '@/cms/schema/post'

export default defineConfig({
    name: 'default',
    title: 'Brahmaputra Udyog Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo1234',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: [post],
    },
})
