import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { client, urlFor } from "@/cms/sanity-client";

export const metadata = {
    title: "Blog & Resources | Brahmaputra Udyog",
    description: "Industry insights, piping best practices, and project case studies from Northeast India's leading PVC manufacturer.",
};
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogIndexPage() {
    // Fetch from sanity, or fallback to mock data if Sanity not fully configured
    let posts: any[] = [];
    try {
        posts = await client.fetch(
            `*[_type == "post"] | order(publishedAt desc) {
        _id, title, slug, mainImage, publishedAt, excerpt
      }`
        );
    } catch (error) {
        // Graceful fallback targeting SEO keywords
        posts = [
            {
                _id: '1',
                title: 'Choosing a Trusted PVC Pipe Manufacturer in Guwahati',
                slug: { current: 'pvc-pipe-manufacturer-guwahati' },
                publishedAt: new Date().toISOString(),
                excerpt: 'Evaluating local manufacturing capabilities, ISI certifications, and delivery timelines for major construction projects in Guwahati.',
                mainImage: null
            },
            {
                _id: '2',
                title: 'Top Traits of a Reliable UPVC Pipes Supplier in Assam',
                slug: { current: 'upvc-pipes-supplier-assam' },
                publishedAt: new Date(Date.now() - 86400000).toISOString(),
                excerpt: 'How to ensure your UPVC supplier can handle massive plumbing demands across Assam while maintaining strict material properties.',
                mainImage: null
            },
            {
                _id: '3',
                title: 'Designing Industrial Piping Systems for Northeast India',
                slug: { current: 'industrial-piping-systems-northeast-india' },
                publishedAt: new Date(Date.now() - 172800000).toISOString(),
                excerpt: 'Best practices for engineering resilient polymer piping networks capable of withstanding the extreme weather of Northeast India.',
                mainImage: null
            }
        ];
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog & Resources</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    Industry insights, piping best practices, and project case studies.
                </p>
            </section>

            <section className="py-20 bg-steel-50 flex-1">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post._id} href={`/blog/${post.slug.current}`} className="group h-full">
                                <Card className="flex flex-col h-full overflow-hidden border-transparent shadow-md hover:shadow-xl transition-all duration-300 w-full group-hover:-translate-y-1 bg-white">
                                    <div className="relative h-56 w-full bg-steel-200">
                                        {post.mainImage ? (
                                            <Image
                                                src={urlFor(post.mainImage).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-navy-900 flex items-center justify-center">
                                                <span className="text-industrial-500 font-bold opacity-30 text-4xl">BU</span>
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="flex flex-col flex-1 p-8">
                                        <div className="flex items-center text-steel-500 text-sm mb-4">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <h2 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-industrial-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-steel-600 mb-6 flex-1 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="inline-flex items-center text-sm font-bold text-navy-900 mt-auto uppercase tracking-wide">
                                            Read Article <ArrowRight className="ml-2 h-4 w-4 text-industrial-500 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
