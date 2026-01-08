// JSON-LD Schema Markup Generator
// This file contains functions to generate structured data for SEO

function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://capitaldistricttech.com",
    "name": "Capital District Tech Support",
    "image": "https://capitaldistricttech.com/images/logo.png",
    "description": "Professional tech support services for homes and businesses in Albany, Schenectady, Troy, and the Capital District of New York. Computer repair, virus removal, smart home setup, and more.",
    "telephone": "+15182345678",
    "email": "support@capitaldistricttech.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 State Street",
      "addressLocality": "Albany",
      "addressRegion": "NY",
      "postalCode": "12207",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.6526",
      "longitude": "-73.7562"
    },
    "url": "https://capitaldistricttech.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Albany",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Schenectady",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Troy",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Latham",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Clifton Park",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Cohoes",
        "addressRegion": "NY"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.facebook.com/capitaldistricttech",
      "https://www.instagram.com/capitaldistricttech"
    ]
  };
}

function generateServiceSchema(serviceName, serviceDescription, serviceUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Capital District Tech Support"
    },
    "description": serviceDescription,
    "areaServed": {
      "@type": "State",
      "name": "New York"
    },
    "url": serviceUrl
  };
}

function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// Insert schema into page
function insertSchema(schemaData) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
}

// Initialize schemas on page load
document.addEventListener('DOMContentLoaded', () => {
  // Always insert LocalBusiness schema
  insertSchema(generateLocalBusinessSchema());
});
