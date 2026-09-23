import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-navy-950 min-h-[90vh] flex items-center pt-20">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear hover:scale-110"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-navy-950/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="max-w-4xl space-y-10">
                    <div className="inline-flex items-center rounded-full border border-industrial-500/30 bg-industrial-500/10 px-4 py-2 text-sm font-bold text-industrial-500 uppercase tracking-widest backdrop-blur-sm">
                        <span className="relative flex h-3 w-3 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-industrial-500"></span>
                        </span>
                        Trusted Manufacturer Since 1976
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                        Engineering Reliable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-400 to-industrial-600">Industrial Piping</span> Systems.
                    </h1>

                    <p className="max-w-2xl text-xl md:text-2xl text-steel-300 leading-relaxed font-light">
                        Guwahati's premier manufacturer of high-pressure PVC, UPVC, and agricultural piping serving major infrastructure projects across Northeast India.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                        <Link href="/dealers" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full h-16 px-10 text-lg font-bold bg-industrial-500 hover:bg-industrial-600 text-white shadow-xl shadow-industrial-500/20 transition-transform active:scale-95">
                                Join Dealer Network <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                        <Link href="/products" className="w-full sm:w-auto">
                            <div className="group flex items-center space-x-3 text-white hover:text-industrial-400 transition-colors cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                                <PlayCircle className="h-16 w-16 text-steel-500 group-hover:text-industrial-500 transition-colors" />
                                <span className="font-bold text-lg uppercase tracking-wide">Explore Catalog</span>
                            </div>
                        </Link>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex items-center space-x-8 opacity-70">
                        <div className="text-white font-bold uppercase tracking-widest text-sm">Approved By:</div>
                        <div className="text-steel-400 font-bold text-xl">IS:4985</div>
                        <div className="w-1.5 h-1.5 rounded-full bg-steel-600"></div>
                        <div className="text-steel-400 font-bold text-xl">ASTM D-1785</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
