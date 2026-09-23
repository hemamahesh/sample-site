import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { client, urlFor } from "@/cms/sanity-client";
// import { PortableText } from '@portabletext/react'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: params.slug });
        if (!post) return { title: "Article Not Found" };
        return {
            title: `${post.title} | Brahmaputra Udyog Blog`,
            description: post.excerpt,
        };
    } catch (error) {
        return { title: "Blog Article | Brahmaputra Udyog" };
    }
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    let post: any = null;

    try {
        post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: params.slug });
    } catch (error) {
        // Fallback Mock Data
        if (params.slug === 'pvc-pipe-manufacturer-guwahati') {
            post = {
                title: 'Choosing a Trusted PVC Pipe Manufacturer in Guwahati',
                publishedAt: new Date().toISOString(),
                mainImage: null,
                body: null,
                fallbackHTML: `
                    <p>Guwahati is rapidly expanding its commercial and residential infrastructure. For contractors, partnering with a local <strong>PVC pipe manufacturer in Guwahati</strong> is essential to ensure steady supply chains and reduced logistics costs.</p>
                    <h3 class="text-2xl font-bold text-navy-900 mt-8 mb-4">Why Local Manufacturing Matters</h3>
                    <p>When you source locally, you aren't just saving on transport. You gain the ability to inspect the factory, verify ISI certifications (like IS:4985), and collaborate on custom extrusion lengths.</p>
                    <p class="mt-4">Brahmaputra Udyog operates one of the largest manufacturing facilities in the region. We specialize in high-pressure <a href="/products/pvc-pipes" class="text-industrial-500 font-bold hover:underline">Agricultural & Industrial PVC Pipes</a>, engineered specifically for the demanding soil and weather conditions of the Northeast.</p>
                `
            };
        } else if (params.slug === 'upvc-pipes-supplier-assam') {
            post = {
                title: 'Top Traits of a Reliable UPVC Pipes Supplier in Assam',
                publishedAt: new Date(Date.now() - 86400000).toISOString(),
                mainImage: null,
                body: null,
                fallbackHTML: `
                    <p>Selecting a <strong>UPVC pipes supplier in Assam</strong> goes beyond just comparing prices per meter. UPVC (Unplasticized Polyvinyl Chloride) is critical for clean drinking water and high-pressure plumbing installations.</p>
                    <h3 class="text-2xl font-bold text-navy-900 mt-8 mb-4">Quality Indicators to Look For</h3>
                    <ul class="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Lead-Free Formulation:</strong> Ensure the supplier provides RoHS compliant, non-toxic piping.</li>
                        <li><strong>UV Resistance:</strong> Essential for exposed piping under the harsh Assam sun.</li>
                        <li><strong>Complete Fitting Range:</strong> A good supplier offers everything from pipes to complementary <a href="/products/pvc-fittings" class="text-industrial-500 font-bold hover:underline">Fittings & Accessories</a>.</li>
                    </ul>
                    <p>For premium residential projects, explore our <a href="/products/upvc-plumbing-pipes" class="text-industrial-500 font-bold hover:underline">UPVC Plumbing Systems</a> which are engineered for zero-leakage and lifetime durability.</p>
                `
            };
        } else if (params.slug === 'industrial-piping-systems-northeast-india') {
            post = {
                title: 'Designing Industrial Piping Systems for Northeast India',
                publishedAt: new Date(Date.now() - 172800000).toISOString(),
                mainImage: null,
                body: null,
                fallbackHTML: `
                    <p>Engineering <strong>industrial piping systems in Northeast India</strong> requires accounting for seismic zones, heavy monsoons, and varying soil compositions. Standard commercial pipes are often insufficient for chemical plants, fluid transport, and deep-well submersible applications.</p>
                    <h3 class="text-2xl font-bold text-navy-900 mt-8 mb-4">Material Selection for Extreme Conditions</h3>
                    <p>For robust industrial application, thick-walled PVC and specialized valves are mandatory. System integrators must rely on precision injection-molded <a href="/products/industrial-valves" class="text-industrial-500 font-bold hover:underline">Industrial Valves</a> to manage high-pressure fluid control without failure.</p>
                    <p class="mt-4">At Brahmaputra Udyog, we assist project engineers in designing scalable solutions. If you are planning a large-scale deployment, reach out to our technical team via our <a href="/contact" class="text-industrial-500 font-bold hover:underline">Contact Page</a> for specialized consultation.</p>
                `
            };
        } else {
            notFound();
        }
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <article className="pb-24">
                {/* Hero Image & Title */}
                <header className="bg-navy-950 pt-20 pb-24 px-4 text-center relative overflow-hidden">
                    <div className="container mx-auto max-w-4xl relative z-10">
                        <Link href="/blog" className="inline-flex items-center text-steel-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back to all articles
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center text-steel-400 space-x-2">
                            <Calendar className="h-5 w-5" />
                            <span>
                                {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content Body */}
                <div className="container mx-auto px-4 max-w-3xl -mt-12 relative z-20">
                    <div className="bg-white rounded-2xl shadow-xl border border-steel-200 p-8 md:p-12">
                        {post.mainImage && (
                            <div className="mb-10 rounded-xl overflow-hidden relative aspect-video bg-steel-100">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="prose prose-lg prose-steel max-w-none">
                            {/* If Sanity is properly connected, use PortableText */}
                            {/* {post.body ? <PortableText value={post.body} /> : ... } */}

                            {post.fallbackHTML && (
                                <div
                                    className="text-steel-700 leading-relaxed text-lg space-y-4"
                                    dangerouslySetInnerHTML={{ __html: post.fallbackHTML }}
                                />
                            )}
                        </div>

                        <div className="mt-16 pt-8 border-t border-steel-200">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-steel-500 uppercase tracking-wider">Share Article</span>
                                {/* Social Share Mock */}
                                <div className="flex space-x-4">
                                    <button className="text-steel-400 hover:text-industrial-500 font-medium">LinkedIn</button>
                                    <button className="text-steel-400 hover:text-industrial-500 font-medium">Twitter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
