import { Factory, Activity, HardHat, TrendingUp } from "lucide-react";
import Image from "next/image";

export function ManufacturingCapability() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2 relative">
                        {/* Decorative glow blobs */}
                        <div className="absolute top-0 -left-10 w-40 h-40 bg-industrial-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-10 w-40 h-40 bg-navy-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

                        {/* Image Collage */}
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-10">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                                    <Image
                                        src="https://images.unsplash.com/photo-1565814329452-e1efa11c5e8b?auto=format&fit=crop&q=80"
                                        alt="Extrusion Machinery"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                                        alt="Factory Control Room"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504917595217-d4fa5fac841e?auto=format&fit=crop&q=80"
                                        alt="PVC Pipes Storage"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                                    <Image
                                        src="https://images.unsplash.com/photo-1610486847040-59f7ce284e3c?auto=format&fit=crop&q=80"
                                        alt="Injection Molding"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>

                            {/* Overlay Metric stat */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-navy-900 p-6 rounded-2xl shadow-2xl border-2 border-industrial-500 min-w-[200px] text-center">
                                <Factory className="h-10 w-10 text-industrial-500 mx-auto mb-2" />
                                <div className="text-3xl font-black tracking-tight">10,000+</div>
                                <div className="text-sm text-steel-500 font-bold uppercase tracking-wider mt-1">MT Annual Capacity</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
                                State-of-the-art Manufacturing Operations
                            </h2>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Our massive production facility in Guwahati leverages imported extrusion machinery, precision molding equipment, and computerized quality checks to guarantee consistent dimensional accuracy and structural strength across all piping systems.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Activity,
                                    title: "High-Speed Extrusion Lines",
                                    description: "Twin-screw extruders enabling seamless, continuous production of large-diameter UPVC pipes.",
                                },
                                {
                                    icon: HardHat,
                                    title: "Injection Molding Division",
                                    description: "Hundreds of high-cavitation molds for the mass production of precision pipe fittings and valves.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Automated Quality Labs",
                                    description: "In-house hydrostatic pressure testing, impact testing, and raw material chemical analysis.",
                                },
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-navy-50 p-3 rounded-lg text-industrial-500">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy-900">{feature.title}</h4>
                                        <p className="text-steel-600 mt-1 leading-relaxed">
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
