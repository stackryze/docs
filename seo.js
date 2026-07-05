// Global SEO: Inject Organization + WebSite JSON-LD structured data.
// Mintlify auto-injects every root-level `.js` file on every page. The contents
// are Stackryze-specific (URLs, brand copy, social handles) — adapted from the
// same pattern used by dodo-docs.
(function () {
  if (typeof document === "undefined") return;

  var orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://stackryze.com/#organization",
        name: "Stackryze",
        url: "https://stackryze.com",
        logo: {
          "@type": "ImageObject",
          url: "https://docs.stackryze.com/logo/dark.svg",
        },
        sameAs: [
          "https://github.com/stackryze",
          "https://x.com/stackryze",
          "https://linkedin.com/company/stackryze",
        ],
        description:
          "Stackryze — affordable software for the modern web. Domains, DNS, and beyond.",
      },
      {
        "@type": "WebSite",
        "@id": "https://docs.stackryze.com/#website",
        url: "https://docs.stackryze.com",
        name: "Stackryze Documentation",
        publisher: {
          "@id": "https://stackryze.com/#organization",
        },
        inLanguage: ["en"],
        description:
          "Documentation for Stackryze — domains, DNS, and the broader product roadmap.",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://docs.stackryze.com/?q={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      },
    ],
  };

  function injectSchema(data) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  injectSchema(orgSchema);
})();
