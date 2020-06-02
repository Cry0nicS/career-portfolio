import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from "gatsby-background-image";
import {GatsbyImageProps} from "gatsby-image";
import React from "react";

import Avatar from "./avatar/avatar";

import "./header.scss";

interface ImageQuery {
    headerImage: {
        childImageSharp: GatsbyImageProps;
    };
}

const getHeaderImage = graphql`
    {
        headerImage: file(relativePath: {eq: "header-poe.png"}) {
            childImageSharp {
                fluid(maxWidth: 1440, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const Header = () => {
    const {headerImage}: ImageQuery = useStaticQuery(getHeaderImage);

    return (
        <BackgroundImage Tag="header" className="header" fluid={headerImage.childImageSharp.fluid}>
            <div className="header-avatar">
                <Avatar title={"The four elements avatar inspired from Legend of Korra"} />
            </div>
            <div className="title">
                <h1>Adrian Popescu</h1>
                <h3>Software engineer and esports enthusiast</h3>
            </div>
        </BackgroundImage>
    );
};

export default Header;
