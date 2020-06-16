import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from "gatsby-background-image";
import {GatsbyImageProps} from "gatsby-image";
import React, {ReactElement} from "react";

import bioElements from "../../constants/bio-items";
import Bio from "../bio/bio";

import Avatar from "./avatar/avatar";

import styles from "./header.module.scss";

interface ImageQuery {
    headerImage: {
        childImageSharp: GatsbyImageProps;
    };
}

const getHeaderImage = graphql`
    {
        headerImage: file(relativePath: {eq: "header-poe.png"}) {
            childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Header = (): ReactElement => {
    const {headerImage}: ImageQuery = useStaticQuery(getHeaderImage);

    return (
        <BackgroundImage
            Tag="header"
            className={styles.header}
            fluid={headerImage.childImageSharp.fluid}>
            <div className={styles.content}>
                <Avatar title={"The four elements avatar inspired from Legend of Korra"} />
                <div className={styles.title}>
                    <h1>Adrian Popescu</h1>
                    <h3>Software engineer and esports enthusiast</h3>
                </div>
            </div>
            <Bio items={bioElements} />
        </BackgroundImage>
    );
};

export default Header;
