import React from "react";

import "./avatar.scss";
import {useStaticQuery, graphql} from "gatsby";
import Img, {GatsbyImageProps} from "gatsby-image";

interface Props {
    imageUrl?: string;
    title: string;
}

interface ImageQuery {
    placeholderImage: {
        childImageSharp: GatsbyImageProps;
    };
}

const Avatar = ({title}: Props) => {
    // Currently it is not possible to pass variables (like imageUrl) to the StaticQuery.
    // See https://github.com/gatsbyjs/gatsby/issues/10482.
    const data: ImageQuery = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(relativePath: {eq: "elements.png"}) {
                    childImageSharp {
                        fixed(width: 100, height: 100) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );

    return (
        <Img
            className="avatar rounded"
            fixed={data.placeholderImage.childImageSharp.fixed}
            title={title}
        />
    );
};

export default Avatar;
