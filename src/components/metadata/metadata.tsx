import {useLocation} from "@reach/router";
import {graphql, useStaticQuery} from "gatsby";
import React from "react";
import {Helmet} from "react-helmet";

interface Props {
    description?: string | null;
    title: string;
}

interface MetadataQuery {
    site: {
        siteMetadata: {
            author: string;
            description: string;
            image: string;
            keywords: string;
            language: string;
            siteUrl: string;
            social: {
                twitter: string;
            };
            title: string;
        };
    };
}

const getMetadata = graphql`
    {
        site {
            siteMetadata {
                author
                description
                image
                keywords
                language
                siteUrl
                social {
                    twitter
                }
                title
            }
        }
    }
`;

const Metadata = ({title, description = null}: Props) => {
    const {pathname} = useLocation();
    const {
        site: {siteMetadata}
    }: MetadataQuery = useStaticQuery(getMetadata);

    // Todo: Move Twitter to its own component and define one for Facebook too.
    return (
        <Helmet title={`${title} | ${siteMetadata.title}`}>
            <html lang={siteMetadata.language} />
            <link rel="canonical" href={`${siteMetadata.siteUrl}${pathname}`} />
            <meta charSet="UTF-8" />
            <meta name="author" content={siteMetadata.author} />
            <meta name="description" content={description ?? siteMetadata.description} />
            <meta name="image" content={siteMetadata.image} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={siteMetadata.social.twitter} />
            <meta name="twitter:image" content={siteMetadata.image} />
            <meta name="twitter:title" content={`${title} | ${siteMetadata.title}`} />
            <meta property="og:description" content={siteMetadata.description} />
            <meta property="og:image" content={siteMetadata.image} />
            <meta property="og:title" content={`${title} | ${siteMetadata.title}`} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${pathname}`} />
        </Helmet>
    );
};

export default Metadata;
