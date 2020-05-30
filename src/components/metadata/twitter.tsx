import React from "react";
import {Helmet} from "react-helmet";

interface Props {
    creator: string;
    description: string;
    image: string;
    title: string;
}

const Twitter = (data: Props) => (
    <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={data.creator} />
        <meta name="twitter:site" content={data.creator} />
        <meta name="twitter:image" content={data.image} />
        <meta name="twitter:image:alt" content={data.description} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:title" content={data.title} />
    </Helmet>
);

export default Twitter;
