import Image from "next/image";
import { Factory, Package, Settings, Train } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Manufacturing Infrastructure | Brahmaputra Udyog",
    description: "Explore our massive PVC and UPVC production facilities. Imported machinery, huge scale, and automated processes in Guwahati.",
};

export default function ManufacturingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Manufacturing Infrastructure</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    One of Northeast India's most advanced and largest polymer processing facilities.
                </p>
            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-navy-900">Scale Meets Precision</h2>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Spread across several acres in the industrial hubs of Assam, our manufacturing plant operates 24/7. We utilize automated material handling systems that feed high-speed twin-screw extruders.
                            </p>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                By investing in European and Japanese machinery, we've eliminated human error from the core production layers, ensuring dimensional perfection in every batch of pipes and fittings.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="bg-navy-50 p-6 rounded-xl border border-steel-200 text-center">
                                    <div className="text-3xl font-bold text-industrial-500 mb-2">10K+</div>
                                    <div className="text-sm font-semibold text-navy-900 uppercase">MT/Year Capacity</div>
                                </div>
                                <div className="bg-navy-50 p-6 rounded-xl border border-steel-200 text-center">
                                    <div className="text-3xl font-bold text-industrial-500 mb-2">5+</div>
                                    <div className="text-sm font-semibold text-navy-900 uppercase">Acres of Facility</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-steel-200">
                            <Image
                                src="https://images.unsplash.com/photo-1580983554477-7104b207b8b2?auto=format&fit=crop&q=80"
                                alt="Factory production line"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment and Processes */}
            <section className="py-20 bg-steel-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Machinery & Logistics</h2>
                        <p className="text-lg text-steel-600">
                            A breakdown of our end-to-end processing power.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="border-t-4 border-t-industrial-500">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <Settings className="h-12 w-12 text-industrial-500 mb-4" />
                                <h3 className="text-xl font-bold text-navy-900 mb-3">Material Compounding</h3>
                                <p className="text-steel-600 text-sm">Automated mixing units ensuring precise polymer formulations before extrusion.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-industrial-500">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <Factory className="h-12 w-12 text-industrial-500 mb-4" />
                                <h3 className="text-xl font-bold text-navy-900 mb-3">Pipe Extrusion</h3>
                                <p className="text-steel-600 text-sm">Twin-screw lines producing pipes from 20mm up to 400mm with consistent wall thickness.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-industrial-500">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <Package className="h-12 w-12 text-industrial-500 mb-4" />
                                <h3 className="text-xl font-bold text-navy-900 mb-3">Injection Molding</h3>
                                <p className="text-steel-600 text-sm">High-tonnage injection machines strictly dedicated to complex fittings and valves.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-industrial-500">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <Train className="h-12 w-12 text-industrial-500 mb-4" />
                                <h3 className="text-xl font-bold text-navy-900 mb-3">Warehousing & Dispatch</h3>
                                <p className="text-steel-600 text-sm">Massive inventory yards allowing us to process bulk government orders immediately.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
