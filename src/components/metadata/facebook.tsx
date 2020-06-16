import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

interface Props {
    author: string;
    description: string;
    image: string;
    language: string;
    pageTitle: string;
    siteUrl: string;
    siteName: string;
    contentType: string;
}

const Facebook = (data: Props): ReactElement => (
    <Helmet>
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:image:alt" content={data.description} />
        <meta property="og:locale" content={data.language} />
        <meta property="og:site_name" content={data.siteName} />
        <meta property="og:title" content={data.pageTitle} />
        <meta property="og:type" content={data.contentType} />
        <meta property="og:url" content={data.siteUrl} />
    </Helmet>
);

export default Facebook;
