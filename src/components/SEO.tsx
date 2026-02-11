

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    pageType?: 'WebPage' | 'ContactPage' | 'Service';
    noIndex?: boolean;
}

const SEO = ({
    title,
    description,
    canonical,
    image,
    pageType = 'WebPage',
    noIndex = false,
}: SEOProps) => {
    const siteUrl = 'https://vpgproyectos.es';
    const fullUrl = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/logo.png`;

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                '@id': `${siteUrl}/#organization`,
                name: 'VPG Proyectos y Obras',
                image: `${siteUrl}/logo.png`,
                telephone: '+34 614 809 365',
                email: 'info@vpgproyectos.es',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Granada',
                    addressRegion: 'Granada',
                    addressCountry: 'ES'
                },
                areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Granada'
                },
                url: siteUrl,
                description: 'Empresa especializada en instalaciones eléctricas, fotovoltaica, obra civil y reformas en Granada.',
                priceRange: '€€'
            },
            {
                '@type': pageType,
                name: title,
                description,
                url: fullUrl,
                isPartOf: {
                    '@type': 'WebSite',
                    '@id': `${siteUrl}/#website`,
                    url: siteUrl,
                    name: 'VPG Proyectos y Obras'
                },
                publisher: {
                    '@id': `${siteUrl}/#organization`
                }
            }
        ]
    };

    const robots = noIndex
        ? 'noindex,nofollow'
        : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content="VPG Proyectos y Obras" />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:alt" content="VPG Proyectos y Obras" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </>
    );
};

export default SEO;
