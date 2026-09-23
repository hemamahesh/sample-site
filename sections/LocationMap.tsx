import { MapPin } from "lucide-react";

export function LocationMap() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
                                Corporate Office
                            </h2>
                            <p className="text-lg text-steel-600">
                                Visit us to discuss wholesale partnerships, industrial supply requirements, or project collaborations.
                            </p>
                        </div>

                        <div className="flex bg-navy-50 p-6 rounded-2xl border border-steel-200">
                            <MapPin className="h-8 w-8 text-industrial-500 shrink-0 mt-1 mr-4" />
                            <div>
                                <h4 className="text-xl font-bold text-navy-900 mb-2">Brahmaputra Udyog Pvt Ltd</h4>
                                <address className="not-italic text-steel-700 leading-relaxed">
                                    MLN Road<br />
                                    Pan Bazar<br />
                                    Guwahati, Assam 781001<br />
                                    India
                                </address>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-steel-200 bg-steel-100 relative">
                        {/* The Google Map Embed. Using a placeholder map location for Guwahati. */}
                        <iframe
                            title="Brahmaputra Udyog Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.298282386127!2d91.73463385734298!3d26.18349272820573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a3a7801a2c3%3A0xe96cdcf3c457d5e4!2sPan%20Bazaar%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
