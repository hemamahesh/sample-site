import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

export function DealerCTA() {
    return (
        <section className="relative py-28 bg-navy-900 overflow-hidden border-y border-navy-800">
            {/* Background Graphic */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none">
                <svg viewBox="0 0 800 800" className="absolute right-[-10%] top-[-20%] w-[120%] h-[120%] fill-current text-white animate-spin-slow">
                    <path d="M400,100 C565.685425,100 700,234.314575 700,400 C700,565.685425 565.685425,700 400,700 C234.314575,700 100,565.685425 100,400 C100,234.314575 234.314575,100 400,100 Z M400,200 C289.54305,200 200,289.54305 200,400 C200,510.45695 289.54305,600 400,600 C510.45695,600 600,510.45695 600,400 C600,289.54305 510.45695,200 400,200 Z M400,300 C455.228475,300 500,344.771525 500,400 C500,455.228475 455.228475,500 400,500 C344.771525,500 300,455.228475 300,400 C300,344.771525 344.771525,300 400,300 Z" />
                </svg>
            </div>
            {/* Hexagon Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl bg-navy-950/50 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl">
                    <div className="inline-block bg-industrial-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Partnership Opportunity</div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                        Become a Brahmaputra Udyog Authorized Dealer
                    </h2>
                    <p className="text-xl text-steel-400 mb-10 leading-relaxed font-light">
                        Capitalize on the infrastructure boom in Northeast India. We offer high-margin price structures, aggressive marketing support, and priority supply lines to our authorized distribution network.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="/dealers" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-industrial-500 hover:bg-industrial-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                                Express Application <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                        <div className="flex items-center text-white space-x-4 px-8 h-16 rounded-xl border border-white/10 bg-white/5 w-full sm:w-auto backdrop-blur-sm">
                            <PhoneCall className="h-6 w-6 text-industrial-500" />
                            <div>
                                <div className="text-xs text-steel-400 font-bold uppercase tracking-wider">Direct Sales Line</div>
                                <span className="font-black text-lg">+91 98765 43210</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
