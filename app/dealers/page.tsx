import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Dealer Network & Partnerships | Brahmaputra Udyog",
    description: "Join the largest piping distributor network in Northeast India. We provide exceptional margins, marketing support, and priority inventory.",
};

export default function DealersPage() {
    const benefits = [
        "High-Margin Price Structures",
        "Priority Stock Availability",
        "Marketing & Showroom Support",
        "Dedicated Regional Sales Managers",
        "Annual Incentive Programs",
        "Technical Training Support"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Dealer Network</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    Partner with Northeast India’s most robust industrial supply chain.
                </p>
            </section>

            {/* Main */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Information Side */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl font-bold text-navy-900 mb-4">A Network Built on Trust</h2>
                                <p className="text-lg text-steel-600 leading-relaxed mb-6">
                                    With hundreds of authorized dealers spanning across Assam, Meghalaya, Arunachal Pradesh, Mizoram, Manipur, Nagaland, and Tripura, our network ensures that contractors can source authentic Brahmaputra Udyog products anywhere in the region.
                                </p>
                                <div className="bg-navy-50 border border-steel-200 rounded-xl p-6 flex items-start space-x-4">
                                    <MapPin className="h-8 w-8 text-industrial-500 shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold text-navy-900 mb-2">Regional Dominance</h4>
                                        <p className="text-steel-600 text-sm">Our logistics grid guarantees rapid delivery within 48 hours to any authorized dealer location in the Northeast.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-6">Benefits of Partnership</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {benefits.map(benefit => (
                                        <div key={benefit} className="flex items-center space-x-3 bg-white border border-steel-200 shadow-sm p-4 rounded-lg">
                                            <CheckCircle2 className="h-5 w-5 text-industrial-500 shrink-0" />
                                            <span className="font-semibold text-navy-800 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="bg-steel-50 border border-steel-200 rounded-2xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                            <h2 className="text-3xl font-black text-navy-900 mb-2 tracking-tight">Express Dealership Application</h2>
                            <p className="text-steel-600 mb-8 font-medium">Fast-track your application. A regional director will contact you within 2 hours.</p>

                            <form className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy-900 uppercase tracking-wide">Firm / Company Name <span className="text-industrial-500">*</span></label>
                                    <Input placeholder="M/s ABC Enterprises" required className="h-14 bg-white border-steel-200 focus:border-industrial-500 focus:ring-industrial-500/20 shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy-900 uppercase tracking-wide">Contact Person <span className="text-industrial-500">*</span></label>
                                    <Input placeholder="Full Name" required className="h-14 bg-white border-steel-200 focus:border-industrial-500 focus:ring-industrial-500/20 shadow-sm" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy-900 uppercase tracking-wide">Phone Number <span className="text-industrial-500">*</span></label>
                                        <Input type="tel" placeholder="+91" required className="h-14 bg-white border-steel-200 focus:border-industrial-500 focus:ring-industrial-500/20 shadow-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy-900 uppercase tracking-wide">City / District <span className="text-industrial-500">*</span></label>
                                        <Input placeholder="e.g. Silchar" required className="h-14 bg-white border-steel-200 focus:border-industrial-500 focus:ring-industrial-500/20 shadow-sm" />
                                    </div>
                                </div>
                                <Button size="lg" className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold text-lg h-14 shadow-xl shadow-navy-900/10 transition-transform active:scale-[0.98]">
                                    Submit Application
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
