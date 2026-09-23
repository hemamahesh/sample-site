import { notFound } from "next/navigation";
import Image from "next/image";
import { productData } from "@/lib/productData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Settings2, Download, ShieldCheck, Factory } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const item = productData[params.slug as keyof typeof productData];
    if (!item) return { title: "Product Not Found" };
    return {
        title: `${item.title} | Technical Specifications | Brahmaputra Udyog`,
        description: item.description,
    };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = productData[params.slug as keyof typeof productData];

    if (!product) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-steel-50">

            {/* Product Hero */}
            <section className="bg-navy-950 pt-20 pb-28 px-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-industrial-500/10 text-industrial-400 px-4 py-2 rounded-full border border-industrial-500/20 text-sm font-bold uppercase tracking-widest">
                                <Factory className="h-4 w-4" />
                                <span>Industrial Grade</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">{product.title}</h1>
                            <p className="text-xl text-steel-400 leading-relaxed max-w-xl">
                                {product.description}
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                                <Button size="lg" className="bg-industrial-500 hover:bg-industrial-600 text-white h-14 px-8 text-lg font-bold shadow-lg shadow-industrial-500/20">
                                    Request Bulk Quote
                                </Button>
                                <Button size="lg" variant="outline" className="border-steel-600 text-white hover:bg-white hover:text-navy-900 h-14 px-8 font-bold transition-colors">
                                    <Download className="mr-2 h-5 w-5" /> Product Catalogue (PDF)
                                </Button>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-navy-900 border border-navy-800">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
                            />
                            {/* Technical Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex justify-around">
                                <div className="text-center">
                                    <div className="text-industrial-500 font-bold mb-1">IS:4985</div>
                                    <div className="text-xs text-steel-400 uppercase">Certified</div>
                                </div>
                                <div className="w-px bg-white/10"></div>
                                <div className="text-center">
                                    <div className="text-industrial-500 font-bold mb-1">100%</div>
                                    <div className="text-xs text-steel-400 uppercase">Virgin Grade</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="py-20 -mt-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Main Technical Content */}
                        <div className="lg:col-span-8 space-y-20">

                            {/* Advanced Technical Specifications */}
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-steel-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-industrial-500"></div>
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="bg-navy-50 p-3 rounded-lg">
                                        <Settings2 className="h-8 w-8 text-navy-900" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight">Technical Specifications</h2>
                                </div>
                                <p className="text-steel-600 text-lg mb-8 leading-relaxed">
                                    Engineered to precise dimensional tolerances, ensuring perfect alignment and leak-proof joints in high-pressure networks.
                                </p>
                                <div className="overflow-x-auto rounded-xl border border-steel-200">
                                    <table className="w-full text-left border-collapse min-w-[600px]">
                                        <thead>
                                            <tr className="bg-navy-900 text-white">
                                                <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Parameter</th>
                                                <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Specification</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.specs.map((spec, i) => (
                                                <tr key={spec.key} className={i % 2 === 0 ? "bg-white" : "bg-steel-50/50"}>
                                                    <th className="py-5 px-6 font-semibold text-navy-900 border-b border-steel-100 w-1/3">{spec.key}</th>
                                                    <td className="py-5 px-6 text-steel-700 border-b border-steel-100 font-medium">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Material Properties Grid */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-10 tracking-tight">Material Properties</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {product.features.map(feat => (
                                        <div key={feat} className="group bg-white border border-steel-200 hover:border-industrial-500 hover:shadow-lg transition-all duration-300 p-6 rounded-2xl flex items-start space-x-4">
                                            <div className="bg-industrial-50 text-industrial-500 group-hover:bg-industrial-500 group-hover:text-white transition-colors p-3 rounded-xl shrink-0">
                                                <ShieldCheck className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <span className="text-navy-900 font-bold text-lg block mb-1">{feat}</span>
                                                <span className="text-steel-500 text-sm leading-relaxed">Guaranteed integrity under rigorous industrial testing environments.</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Application Use Cases */}
                            <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-xl bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                                <h2 className="text-3xl md:text-4xl font-black mb-10 tracking-tight text-white">Industrial Applications</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                                    {product.applications.map(app => (
                                        <div key={app} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                                            <div className="h-3 w-3 rounded-full bg-industrial-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                                            <span className="text-steel-300 font-semibold text-lg">{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Dealer Inquiry Sidebar */}
                        <div className="lg:col-span-4 relative">
                            <div className="bg-white border-2 border-industrial-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-3xl p-8 sticky top-32 z-30">
                                <div className="absolute -top-6 -right-6 bg-industrial-500 text-white h-16 w-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                    <FileText className="h-7 w-7" />
                                </div>

                                <h3 className="text-2xl font-black text-navy-900 mb-3 tracking-tight">Dealer Inquiry</h3>
                                <p className="text-steel-600 mb-8 font-medium leading-relaxed">
                                    Partner with the region's top manufacturer. Submit requirements for <strong className="text-navy-900">{product.title}</strong>.
                                </p>

                                <form className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">Company Name</label>
                                        <Input placeholder="M/s Enteprises" className="h-12 bg-steel-50 border-steel-200 focus:bg-white focus:ring-industrial-500/20" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">Contact Person</label>
                                        <Input placeholder="Full Name" className="h-12 bg-steel-50 border-steel-200 focus:bg-white focus:ring-industrial-500/20" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">Phone</label>
                                            <Input type="tel" placeholder="+91" className="h-12 bg-steel-50 border-steel-200 focus:bg-white focus:ring-industrial-500/20" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">Quantity</label>
                                            <Input placeholder="e.g. 5000m" className="h-12 bg-steel-50 border-steel-200 focus:bg-white focus:ring-industrial-500/20" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">Project Details</label>
                                        <Textarea placeholder="Share details for accurate quotation..." className="h-28 resize-none bg-steel-50 border-steel-200 focus:bg-white focus:ring-industrial-500/20" />
                                    </div>
                                    <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white h-14 text-lg font-bold shadow-xl shadow-navy-900/10 mt-2 transition-transform active:scale-[0.98]">
                                        Submit Requirements
                                    </Button>
                                    <p className="text-xs text-center text-steel-500 mt-4 font-medium">Sales team responds within 2 hours</p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
