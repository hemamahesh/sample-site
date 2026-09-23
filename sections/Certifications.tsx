import Image from "next/image";

export function Certifications() {
    // Utilizing clear, professional typography as placeholders for badges
    const badges = [
        { title: "ISO 9001:2015", desc: "Quality Management" },
        { title: "IS:4985", desc: "PVC Pipes Standard" },
        { title: "ASTM D-1785", desc: "UPVC Standard" },
        { title: "IGBC Member", desc: "Green Building" },
        { title: "RoHS Compliant", desc: "Lead-Free Guarantee" },
    ];

    return (
        <section className="py-16 bg-steel-50 border-y border-steel-200 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <p className="text-sm font-bold text-steel-500 uppercase tracking-widest mb-2">Tested & Approved</p>
                    <h2 className="text-2xl font-bold text-navy-900">Industry Quality Certifications</h2>
                </div>

                {/* Carousel/Grid of Certs */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
                    {badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-steel-100 min-w-[200px] hover:shadow-md transition-shadow grayscale hover:grayscale-0"
                        >
                            {/* Optional: Add badge placeholder circles later if desired, utilizing text for now */}
                            <div className="h-16 w-16 mb-4 rounded-full bg-navy-50 border-4 border-steel-200 flex items-center justify-center">
                                <span className="text-xl font-black text-navy-900">{idx + 1}</span>
                            </div>
                            <h3 className="text-lg font-extrabold text-navy-900 mb-1">{badge.title}</h3>
                            <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider">{badge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
