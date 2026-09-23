import Image from "next/image";
import { CheckCircle2, History, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "About Us | Brahmaputra Udyog Pvt Ltd",
    description: "Learn about the history, mission, and industrial scale of Brahmaputra Udyog, Northeast India's most trusted PVC and UPVC pipe manufacturer.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Brahmaputra Udyog</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    Over 50 years of uncompromising quality and engineering excellence in industrial piping manufacturing.
                </p>
            </section>

            {/* Legacy Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Industrial Legacy</h2>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Established in 1976, Brahmaputra Udyog Pvt Ltd started with a singular vision: to bring world-class piping infrastructure to Northeast India. What began as a humble manufacturing unit in Guwahati has steadily grown into a colossal industrial force.
                            </p>
                            <p className="text-lg text-steel-600 leading-relaxed">
                                Today, our state-of-the-art facilities produce tens of thousands of metric tons of PVC and UPVC products annually, ensuring that massive government water projects and private infrastructural developments run smoothly without material bottlenecks.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                            <Image
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                                alt="Vintage industrial equipment representing our history"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-steel-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-t-4 border-t-industrial-500">
                            <CardContent className="pt-8">
                                <Target className="h-12 w-12 text-industrial-500 mb-6" />
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
                                <p className="text-steel-600 leading-relaxed">
                                    To manufacture and deliver the highest quality piping systems that build the backbone of tomorrow’s infrastructure, relying on advanced polymer science and rigorous testing.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-navy-500">
                            <CardContent className="pt-8">
                                <History className="h-12 w-12 text-navy-500 mb-6" />
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
                                <p className="text-steel-600 leading-relaxed">
                                    To be the undisputed leader in plastic piping engineering across Southeast Asia, recognized globally for structural integrity, environmental consciousness, and reliability.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-steel-500">
                            <CardContent className="pt-8">
                                <Users className="h-12 w-12 text-steel-500 mb-6" />
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our People</h3>
                                <p className="text-steel-600 leading-relaxed">
                                    Behind our massive production capacity lies a dedicated family of skilled engineers, quality inspectors, and logistics experts who form the true core of our industrial strength.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Core Values</h2>
                        <p className="text-lg text-steel-600">The founding principles that govern every extrusion, mold, and dispatch we process.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Uncompromising Quality",
                            "Ethical Sourcing",
                            "Technological Innovation",
                            "Customer-Centric Fulfillment"
                        ].map((val) => (
                            <div key={val} className="flex items-center space-x-4 bg-navy-50 p-6 rounded-xl">
                                <CheckCircle2 className="h-8 w-8 text-industrial-500 shrink-0" />
                                <span className="font-bold text-navy-900 text-lg">{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
