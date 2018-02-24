import React from 'react'
import { Helmet } from "react-helmet";

export const getHelmet = (seo) => {
    return (
        <Helmet
            title={seo.title}
            meta={[
                { charset: seo.meta.charset },
                { name: 'keywords', content: seo.meta.keywords },
                { name: 'description', content: seo.description },
                { property: 'og:description', content: seo.description },
                { property: 'og:title', content: seo.title },
                { property: 'og:url', content: seo.canonical },
            ]}
            link={[
                { property: 'canonical', content: seo.canonical},
            ]}
       />
    )
};