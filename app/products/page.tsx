import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Products | Brahmaputra Udyog Pvt Ltd",
    description: "Browse our comprehensive catalogue of PVC pipes, UPVC pipes, industrial fittings, elbows, and valves for massive infrastructure projects.",
};

const products = [
    {
        title: "PVC Pipes",
        description: "High-durability unplasticized polyvinyl chloride pipes for agricultural and commercial applications.",
        image: "https://images.unsplash.com/photo-1621644026330-9759d57a9772?auto=format&fit=crop&q=80",
        href: "/products/pvc-pipes",
        specs: "Sizes: 20mm - 400mm | Class: Schedule 40 & 80"
    },
    {
        title: "UPVC Pipes",
        description: "Lead-free, UV resistant UPVC pipes ideal for potable water supply systems and plumbing.",
        image: "https://images.unsplash.com/photo-1584443916297-768a355dc875?auto=format&fit=crop&q=80",
        href: "/products/upvc-pipes",
        specs: "Sizes: 1/2 inch - 24 inch | Standard: ASTM D-1785"
    },
    {
        title: "PVC Pipe Fittings",
        description: "Precision-engineered fittings ensuring leak-proof connections across varying pressures.",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
        href: "/products/pvc-pipe-fittings",
        specs: "Couplings, Tees, Reducers, Caps"
    },
    {
        title: "Pipe Elbows",
        description: "Industrial-grade elbows designed for smooth flow transitions and optimal structural integrity.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80",
        href: "/products/pipe-elbows",
        specs: "Angles: 45° and 90° | Heavy Duty"
    },
    {
        title: "Industrial Valves",
        description: "Heavy-duty flow control mechanisms optimized for municipal and industrial liquid management.",
        image: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80",
        href: "/products/industrial-valves",
        specs: "Ball, Butterfly, Check Valves"
    },
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Product Catalogue</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    Industrial-grade piping solutions engineered for maximum durability and chemical resistance.
                </p>
            </section>

            {/* Grid */}
            <section className="py-20 bg-steel-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link key={product.title} href={product.href} className="group flex h-full">
                                <Card className="flex flex-col h-full overflow-hidden border-transparent shadow-md hover:shadow-xl transition-all duration-300 w-full group-hover:-translate-y-1 bg-white">
                                    <div className="relative h-64 w-full overflow-hidden bg-steel-200">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <CardContent className="flex flex-col flex-1 p-8">
                                        <h2 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-industrial-600 transition-colors">
                                            {product.title}
                                        </h2>
                                        <p className="text-steel-600 mb-4 flex-1">
                                            {product.description}
                                        </p>
                                        <div className="bg-navy-50 text-navy-800 text-sm font-semibold p-3 rounded mb-6">
                                            {product.specs}
                                        </div>
                                        <div className="inline-flex items-center text-sm font-bold text-navy-900 mt-auto uppercase tracking-wide">
                                            View Specifications <ArrowRight className="ml-2 h-4 w-4 text-industrial-500 transform group-hover:translate-x-1 transition-transform" />
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
