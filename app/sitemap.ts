import { MetadataRoute } from 'next';
import { productData } from '@/lib/productData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brahmaputraudyog.in';

    // Static Pages
    const routes = [
        '',
        '/about',
        '/products',
        '/manufacturing',
        '/quality-assurance',
        '/dealers',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Product Pages
    const productRoutes = Object.keys(productData).map((slug) => ({
        url: `${baseUrl}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Dynamic SEO Blog Pages (Fallback articles)
    const blogRoutes = [
        'pvc-pipe-manufacturer-guwahati',
        'upvc-pipes-supplier-assam',
        'industrial-piping-systems-northeast-india'
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...productRoutes, ...blogRoutes];
}
