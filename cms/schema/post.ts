import { defineType, defineField } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Post Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'body',
            title: 'Body Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }]
        }),
    ]
})
