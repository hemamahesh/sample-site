import { TrendingUp, Users, ShieldCheck, Factory } from "lucide-react";

export function HomepageStats() {
    const stats = [
        {
            value: "50+",
            label: "Years of Experience",
            icon: TrendingUp,
            description: "Pioneering polymer science since 1976."
        },
        {
            value: "500+",
            label: "Dealer Network",
            icon: Users,
            description: "Extensive reach across Northeast India."
        },
        {
            value: "10K+",
            label: "Metric Tons",
            icon: Factory,
            description: "Annual production capacity."
        },
        {
            value: "IS:4985",
            label: "ISI Certified",
            icon: ShieldCheck,
            description: "Highest quality assurance standards."
        }
    ];

    return (
        <section className="py-16 bg-navy-900 border-y border-navy-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-4 bg-navy-800 p-4 rounded-full border border-navy-700">
                                <stat.icon className="h-8 w-8 text-industrial-500" />
                            </div>
                            <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                            <div className="text-lg font-bold text-steel-300 mb-2 uppercase tracking-wide">{stat.label}</div>
                            <p className="text-sm text-steel-500 max-w-[200px]">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
