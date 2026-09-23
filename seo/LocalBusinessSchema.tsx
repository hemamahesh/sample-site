import React from 'react';

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        "name": "Brahmaputra Udyog Pvt Ltd",
        "alternateName": "BU Pipes",
        "description": "Northeast India's leading manufacturer and supplier of Industrial PVC pipes, UPVC plumbing systems, agricultural piping, and industrial valves since 1976.",
        "image": "https://brahmaputraudyog.in/logo.png",
        "@id": "https://brahmaputraudyog.in",
        "url": "https://brahmaputraudyog.in",
        "telephone": "+91 98765 43210",
        "email": "sales@brahmaputraudyog.in",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "MLN Road, Pan Bazar",
            "addressLocality": "Guwahati",
            "addressRegion": "Assam",
            "postalCode": "781001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.1833,
            "longitude": 91.7333
        },
        "areaServed": [
            "Assam", "Meghalaya", "Arunachal Pradesh", "Nagaland", "Manipur", "Mizoram", "Tripura"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Industrial Piping & Plumbing Solutions",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "PVC Pipes",
                    "url": "https://brahmaputraudyog.in/products/pvc-pipes"
                },
                {
                    "@type": "OfferCatalog",
                    "name": "UPVC Plumbing Pipes",
                    "url": "https://brahmaputraudyog.in/products/upvc-plumbing-pipes"
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Industrial Valves",
                    "url": "https://brahmaputraudyog.in/products/industrial-valves"
                }
            ]
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 98765 43210",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "as"]
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/brahmaputraudyog",
            "https://www.linkedin.com/company/brahmaputraudyog"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
