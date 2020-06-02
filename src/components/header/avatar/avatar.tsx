import {graphql, useStaticQuery} from "gatsby";
import Img, {GatsbyImageProps} from "gatsby-image";
import React from "react";

import "./avatar.scss";

interface Props {
    imageUrl?: string;
    title: string;
}

interface ImageQuery {
    fallbackAvatarImage: {
        childImageSharp: GatsbyImageProps;
    };
}

const getDefaultImageData = graphql`
    {
        fallbackAvatarImage: file(relativePath: {eq: "elements.png"}) {
            childImageSharp {
                fixed(width: 110, height: 110) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

/**
 * Returns a rounded 100x100px avatar. If no imageUrl is provided, it falls back to elements.png internal image.
 */
const Avatar = ({...params}: Props) => {
    // Currently it is not possible to pass variables to the StaticQuery in order to make the image size more generic.
    // See https://github.com/gatsbyjs/gatsby/issues/10482.
    const {fallbackAvatarImage}: ImageQuery = useStaticQuery(getDefaultImageData);

    if (params.imageUrl !== undefined && params.imageUrl !== "" && validateUrl(params.imageUrl)) {
        return (
            <div
                className="avatar rounded"
                title={params.title}
                style={{backgroundImage: `url(${params.imageUrl})`}}
            />
        );
    }

    return (
        <Img
            className="avatar rounded"
            fixed={fallbackAvatarImage.childImageSharp.fixed}
            title={params.title}
        />
    );
};

function validateUrl(string: string): boolean {
    const pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/u;

    return new RegExp(pattern, "u").test(string);
}

export default Avatar;
