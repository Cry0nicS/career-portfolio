import {graphql, useStaticQuery} from "gatsby";
import Img, {GatsbyImageProps} from "gatsby-image";
import React, {ReactElement} from "react";

import styles from "./avatar.module.scss";

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
        fallbackAvatarImage: file(relativePath: {eq: "avatar.png"}) {
            childImageSharp {
                fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

/**
 * Returns a rounded 150x150px avatar. If no imageUrl is provided, it falls back to avatar.png internal image.
 */
const Avatar = ({...params}: Props): ReactElement => {
    // Currently it is not possible to pass variables to the StaticQuery in order to make the image size more generic.
    // See https://github.com/gatsbyjs/gatsby/issues/10482.
    const {fallbackAvatarImage}: ImageQuery = useStaticQuery(getDefaultImageData);

    if (params.imageUrl !== undefined && params.imageUrl !== "" && validateUrl(params.imageUrl)) {
        return (
            <div
                className={`${styles.avatar} ${styles.rounded}`}
                title={params.title}
                style={{backgroundImage: `url(${params.imageUrl})`}}
            />
        );
    }

    return (
        <Img
            className={`${styles.avatar} ${styles.rounded}`}
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
