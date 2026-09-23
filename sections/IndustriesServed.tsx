import { Building2, Tractor, Droplet, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";

export function IndustriesServed() {
    const industries = [
        {
            title: "Construction & Infrastructure",
            description: "Providing high-strength piping networks for residential, commercial, and high-rise developments.",
            icon: Building2,
            color: "text-blue-500",
            bg: "bg-blue-50",
        },
        {
            title: "Agriculture & Irrigation",
            description: "Durable borewell and irrigation piping solutions engineered to withstand harsh outdoor environments.",
            icon: Tractor,
            color: "text-green-600",
            bg: "bg-green-50",
        },
        {
            title: "Water Distribution",
            description: "Safe, food-grade UPVC piping systems for municipal potable water supply and sanitation projects.",
            icon: Droplet,
            color: "text-cyan-500",
            bg: "bg-cyan-50",
        },
        {
            title: "Industrial Processing",
            description: "Chemical-resistant pipelines and valves designed for safe fluid transport in factory environments.",
            icon: Cog,
            color: "text-purple-500",
            bg: "bg-purple-50",
        },
    ];

    return (
        <section className="py-24 bg-navy-950 border-t border-navy-900 relative">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Empowering Core Industries
                    </h2>
                    <p className="text-lg text-steel-400">
                        Our piping and plumbing systems provide the critical infrastructure backbone for Northeast India's most demanding sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((ind, idx) => (
                        <Card key={idx} className="bg-navy-900 border-navy-800 hover:border-industrial-500/50 hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col items-center text-center">
                            <div className={`p-4 rounded-full ${ind.bg} ${ind.color} mb-6`}>
                                <ind.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{ind.title}</h3>
                            <p className="text-steel-400 leading-relaxed">
                                {ind.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
