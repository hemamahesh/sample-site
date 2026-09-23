import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
    {
        title: "PVC Pipes",
        description: "High-durability unplasticized polyvinyl chloride pipes for agricultural and commercial applications.",
        image: "https://images.unsplash.com/photo-1621644026330-9759d57a9772?auto=format&fit=crop&q=80",
        href: "/products/pvc-pipes",
    },
    {
        title: "UPVC Pipes",
        description: "Lead-free, UV resistant UPVC pipes ideal for potable water supply systems and plumbing.",
        image: "https://images.unsplash.com/photo-1584443916297-768a355dc875?auto=format&fit=crop&q=80",
        href: "/products/upvc-pipes",
    },
    {
        title: "PVC Pipe Fittings",
        description: "Precision-engineered fittings ensuring leak-proof connections across varying pressures.",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
        href: "/products/pvc-pipe-fittings",
    },
    {
        title: "Pipe Elbows",
        description: "Industrial-grade elbows designed for smooth flow transitions and optimal structural integrity.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80",
        href: "/products/pipe-elbows",
    },
    {
        title: "Industrial Valves",
        description: "Heavy-duty flow control mechanisms optimized for municipal and industrial liquid management.",
        image: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80",
        href: "/products/industrial-valves",
    },
];

export function ProductCategories() {
    return (
        <section className="py-24 bg-steel-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
                            Premium Industrial Solutions
                        </h2>
                        <p className="text-lg text-steel-600">
                            Explore our comprehensive range of high-performance piping products, engineered to meet stringent quality standards for diverse infrastructural needs.
                        </p>
                    </div>
                    <Link href="/products" className="inline-flex items-center text-industrial-600 font-semibold hover:text-industrial-700 transition-colors">
                        View All Products <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.title} href={category.href} className="group flex h-full">
                            <Card className="flex flex-col h-full overflow-hidden border-transparent shadow-md hover:shadow-xl transition-all duration-300 w-full group-hover:-translate-y-1">
                                <div className="relative h-60 w-full overflow-hidden bg-steel-200">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <CardContent className="flex flex-col flex-1 p-8 bg-white">
                                    <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-industrial-600 transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-steel-600 mb-6 flex-1">
                                        {category.description}
                                    </p>
                                    <div className="inline-flex items-center text-sm font-bold text-navy-900 mt-auto uppercase tracking-wide">
                                        Explore Series <ArrowRight className="ml-2 h-4 w-4 text-industrial-500 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
