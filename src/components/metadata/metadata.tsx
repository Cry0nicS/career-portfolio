import {useLocation} from "@reach/router";
import {graphql, useStaticQuery} from "gatsby";
import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

import Facebook from "./facebook";
import Twitter from "./twitter";

interface Props {
    contentType?: string;
    pageDescription?: string | null;
    pageTitle: string;
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
            siteTitle: string;
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
                siteTitle: title
            }
        }
    }
`;

const Metadata = ({
    pageTitle,
    pageDescription = null,
    contentType = "website"
}: Props): ReactElement => {
    const {
        site: {siteMetadata}
    }: MetadataQuery = useStaticQuery(getMetadata);

    const description = pageDescription ?? siteMetadata.description;
    const title = `${pageTitle} | ${siteMetadata.siteTitle}`;
    const {pathname} = useLocation();

    return (
        <>
            <Helmet title={title}>
                <html lang={siteMetadata.language} />
                <link rel="canonical" href={`${siteMetadata.siteUrl}${pathname}`} />
                <meta charSet="UTF-8" />
                <meta name="author" content={siteMetadata.author} />
                <meta name="description" content={description} />
                <meta name="image" content={siteMetadata.image} />
                <meta name="keywords" content={siteMetadata.keywords} />
            </Helmet>
            <Facebook
                author={siteMetadata.author}
                description={description}
                image={siteMetadata.image}
                language={siteMetadata.language}
                pageTitle={pageTitle}
                siteUrl={siteMetadata.siteUrl}
                siteName={siteMetadata.siteTitle}
                contentType={contentType}
            />
            <Twitter
                creator={siteMetadata.social.twitter}
                description={description}
                image={siteMetadata.image}
                title={title}
            />
        </>
    );
};

export default Metadata;
