import {graphql, useStaticQuery} from "gatsby";
import Img, {GatsbyImageProps} from "gatsby-image";
import React, {ReactElement} from "react";
import styles from "./photo-gallery.module.scss";

interface GalleryQuery {
    gallery: {
        images: [{id: number; childImageSharp: GatsbyImageProps}];
    };
}

const getGalleryImages = graphql`
    {
        gallery: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
            images: nodes {
                id
                childImageSharp {
                    fluid(maxWidth: 550, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

const PhotoGallery = (): ReactElement => {
    const {
        gallery: {images}
    }: GalleryQuery = useStaticQuery(getGalleryImages);

    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h3>Gallery</h3>
                <span>The face behind the voice</span>
            </div>
            <div className={styles.gallery}>
                {images.map((image) => (
                    <Img key={image.id} fluid={image.childImageSharp.fluid} />
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;
