import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function CompanyOverview() {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
                                Pioneering Piping Excellence for Over 50 Years
                            </h2>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Brahmaputra Udyog Pvt Ltd is a long-established industrial manufacturing and supply company based in Guwahati. We specialize in providing robust, high-quality PVC pipes, UPVC pipes, pipe fittings, and industrial piping solutions.
                            </p>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Our commitment to superior manufacturing practices and rigorous quality control has made us the preferred partner for infrastructure, construction, water systems, and industrial projects across Northeast India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Advanced Manufacturing",
                                "Rigorous Quality Control",
                                "Extensive Dealer Network",
                                "ISO Certified Standards",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center space-x-3">
                                    <CheckCircle2 className="h-6 w-6 text-industrial-500 shrink-0" />
                                    <span className="font-semibold text-navy-800">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative">
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-navy-50 rounded-3xl transform rotate-3 scale-105 z-0"></div>

                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-steel-200 bg-white">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                                    alt="Industrial pipes in a warehouse"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Stats Badge */}
                        <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-steel-100 flex items-center space-x-4">
                            <div className="text-5xl font-black text-industrial-500">50+</div>
                            <div className="text-sm font-semibold text-navy-900 leading-tight uppercase tracking-wider">
                                Years of<br />Excellence
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
