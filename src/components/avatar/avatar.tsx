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

// eslint-disable-next-line @typescript-eslint/naming-convention
const Avatar: React.FC<Props> = ({title}: Props) => {
    const data: ImageQuery = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(relativePath: {eq: "elements.png"}) {
                    childImageSharp {
                        fixed(width: 75, height: 75) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );

    return <Img fixed={data.placeholderImage.childImageSharp.fixed} title={title} />;
};

export default Avatar;
