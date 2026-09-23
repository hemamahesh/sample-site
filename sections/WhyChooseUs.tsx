import { ShieldCheck, Truck, Zap, ThumbsUp } from "lucide-react";

export function WhyChooseUs() {
    const features = [
        {
            title: "50+ Years Legacy",
            description: "Decades of proven manufacturing reliability and deep understanding of regional infrastructure requirements.",
            icon: ShieldCheck,
        },
        {
            title: "Uncompromising Quality",
            description: "We use virgin polymer compounds and stringent internal testing to guarantee defect-free batches.",
            icon: ThumbsUp,
        },
        {
            title: "Robust Supply Chain",
            description: "A colossal inventory paired with an optimized logistics network ensures rapid deliveries across Northeast India.",
            icon: Truck,
        },
        {
            title: "Innovative Engineering",
            description: "Continuous adoption of advanced extrusion technology to improve product durability and pressure handling.",
            icon: Zap,
        },
    ];

    return (
        <section className="py-24 bg-steel-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                            Why Contractors Partner With Us
                        </h2>
                        <p className="text-lg text-steel-600 leading-relaxed">
                            We don't just supply pipes; we supply peace of mind. Our systematic approach to manufacturing guarantees that your projects are built to last generations.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="flex items-center justify-center p-3 rounded bg-industrial-500/10">
                                            <feature.icon className="h-6 w-6 text-industrial-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                                        <p className="text-steel-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
