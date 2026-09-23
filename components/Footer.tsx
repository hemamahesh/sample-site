import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy-950 text-steel-300">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Info */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-industrial-500 text-white font-bold text-xl">
                                B
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                Brahmaputra Udyog
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-steel-400">
                            Trusted manufacturer and supplier of PVC and UPVC piping products serving contractors and infrastructure projects across Northeast India since 1976.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="hover:text-industrial-500 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-industrial-500 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-industrial-500 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-industrial-500 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-industrial-500 transition-colors">
                                    About Company
                                </Link>
                            </li>
                            <li>
                                <Link href="/manufacturing" className="hover:text-industrial-500 transition-colors">
                                    Manufacturing Infrastructure
                                </Link>
                            </li>
                            <li>
                                <Link href="/quality-assurance" className="hover:text-industrial-500 transition-colors">
                                    Quality Assurance
                                </Link>
                            </li>
                            <li>
                                <Link href="/dealers" className="hover:text-industrial-500 transition-colors">
                                    Dealer Network
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-industrial-500 transition-colors">
                                    Blog & Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-industrial-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold text-lg">Our Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/products/pvc-pipes" className="hover:text-industrial-500 transition-colors">
                                    PVC Pipes
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/upvc-pipes" className="hover:text-industrial-500 transition-colors">
                                    UPVC Pipes
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/pvc-pipe-fittings" className="hover:text-industrial-500 transition-colors">
                                    PVC Pipe Fittings
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/pipe-elbows" className="hover:text-industrial-500 transition-colors">
                                    Pipe Elbows
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/industrial-valves" className="hover:text-industrial-500 transition-colors">
                                    Industrial Valves
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold text-lg">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-industrial-500 shrink-0" />
                                <span className="leading-tight">
                                    MLN Road, Pan Bazar<br />
                                    Guwahati, Assam 781001<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-industrial-500 shrink-0" />
                                <span>+91 0000 000000</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-industrial-500 shrink-0" />
                                <span>sales@brahmaputraudyog.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-navy-800 bg-navy-950">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-steel-500">
                    <p>&copy; {new Date().getFullYear()} Brahmaputra Udyog Pvt Ltd. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
