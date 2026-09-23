import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Contact Us | Brahmaputra Udyog",
    description: "Get in touch with Brahmaputra Udyog for business inquiries, dealer requests, or project collaborations in Northeast India.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-navy-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                <p className="text-xl text-steel-400 max-w-2xl mx-auto">
                    We're here to help with your industrial piping needs. Reach out to our team today.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-navy-900 mb-6">Get in Touch</h2>
                                <p className="text-lg text-steel-600 leading-relaxed mb-8">
                                    Whether you are a contractor looking for bulk supplies, a dealer wanting to join our network, or simply have a product query, our dedicated team is ready to assist you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-industrial-50 p-3 rounded-full">
                                            <MapPin className="h-6 w-6 text-industrial-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy-900 text-lg mb-1">Corporate Office</h4>
                                            <address className="not-italic text-steel-600">
                                                Brahmaputra Udyog Pvt Ltd<br />
                                                MLN Road, Pan Bazar<br />
                                                Guwahati, Assam 781001<br />
                                                India
                                            </address>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-industrial-50 p-3 rounded-full">
                                            <Phone className="h-6 w-6 text-industrial-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy-900 text-lg mb-1">Phone</h4>
                                            <p className="text-steel-600">+91 0000 000000</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-industrial-50 p-3 rounded-full">
                                            <Mail className="h-6 w-6 text-industrial-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy-900 text-lg mb-1">Email</h4>
                                            <p className="text-steel-600">sales@brahmaputraudyog.in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-industrial-50 p-3 rounded-full">
                                            <Clock className="h-6 w-6 text-industrial-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy-900 text-lg mb-1">Business Hours</h4>
                                            <p className="text-steel-600">
                                                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* General Inquiry Form */}
                        <div className="bg-white border border-steel-200 rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900">First Name <span className="text-red-500">*</span></label>
                                        <Input placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900">Last Name <span className="text-red-500">*</span></label>
                                        <Input placeholder="Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900">Email Address <span className="text-red-500">*</span></label>
                                        <Input type="email" placeholder="john@company.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900">Phone Number</label>
                                        <Input type="tel" placeholder="+91" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-semibold text-navy-900">Inquiry Type</label>
                                        <select className="flex h-10 w-full rounded-md border border-steel-300 bg-white px-3 py-2 text-sm text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-500">
                                            <option>General Inquiry</option>
                                            <option>Dealer Partnership</option>
                                            <option>Bulk Project Quotation</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-semibold text-navy-900">Message <span className="text-red-500">*</span></label>
                                        <Textarea placeholder="How can we help you?" className="h-32" required />
                                    </div>
                                </div>
                                <Button size="lg" className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold h-12">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Full Width Map */}
            <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 mt-auto">
                <iframe
                    title="Brahmaputra Udyog Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.298282386127!2d91.73463385734298!3d26.18349272820573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a3a7801a2c3%3A0xe96cdcf3c457d5e4!2sPan%20Bazaar%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="absolute inset-0"
                />
            </section>
        </div>
    );
}
