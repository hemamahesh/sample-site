import Image from "next/image";
import { ShieldCheck, Crosshair, Droplet, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Quality Assurance | Brahmaputra Udyog",
    description: "Learn about the rigorous material testing, impact tests, and inspection protocols that allow us to guarantee zero-defect piping.",
};

export default function QualityAssurancePage() {
    const tests = [
        { title: "Hydrostatic Pressure Testing", icon: Droplet, desc: "Pipes are subjected to extremely high internal water pressure over varying durability periods to verify burst-resistance strength." },
        { title: "Impact Resistance Testing", icon: Hammer, desc: "Drop-weight tests performed at sub-zero temperatures to ensure pipes don't crack under harsh handling or external force." },
        { title: "Tensile Strength Analysis", icon: Crosshair, desc: "Material samples are stretched to breaking points to verify structural integrity and flexibility under stress." },
        { title: "Dimensional Tolerances", icon: ShieldCheck, desc: "Micrometer precision checks on wall thickness, outer diameter, and socket uniformity." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quality Assurance</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    We guarantee durability by pushing our products to the absolute limit in our internal testing labs.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-20">
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-navy-900">Zero Tolerance for Defects</h2>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Before a single length of pipe or fitting leaves our factory, it undergoes a grueling sequence of chemical, physical, and pressure-based trials.
                            </p>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                This unyielding approach to quality control is why utility boards, prime contractors, and municipalities specify Brahmaputra Udyog products on their tenders without hesitation.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-steel-200">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80"
                                alt="Quality inspector examining products"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Testing Protocols</h2>
                            <p className="text-steel-600">Every batch conforms precisely to ISI standards.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tests.map(test => (
                                <Card key={test.title} className="bg-steel-50 border-steel-200 shadow-none">
                                    <CardContent className="p-8 flex gap-6">
                                        <div className="mt-1">
                                            <test.icon className="h-10 w-10 text-industrial-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-900 mb-3">{test.title}</h3>
                                            <p className="text-steel-600 leading-relaxed">{test.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
