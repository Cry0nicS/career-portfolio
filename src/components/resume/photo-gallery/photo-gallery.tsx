import {graphql, useStaticQuery} from "gatsby";
import Img, {FluidObject} from "gatsby-image";
import React, {ReactElement} from "react";
import styles from "./photo-gallery.module.scss";

interface GalleryQuery {
    allContentfulPhotoGallery: {
        nodes: Array<{
            image: {fluid: FluidObject};
            id: string;
            altText: string;
            title: string;
        }>;
    };
}

const getGalleryImages = graphql`
    {
        allContentfulPhotoGallery {
            nodes {
                image {
                    fluid(maxWidth: 550, quality: 100) {
                        ...GatsbyContentfulFluid
                    }
                }
                id
                altText
                title
            }
        }
    }
`;

const PhotoGallery = (): ReactElement => {
    const {
        allContentfulPhotoGallery: {nodes: allImages}
    }: GalleryQuery = useStaticQuery(getGalleryImages);

    return (
        <section>
            <div className={styles.heading}>
                <h3>Gallery</h3>
                <span>The face behind the voice</span>
            </div>
            <div className={styles.gallery}>
                {allImages.map((image) => (
                    <Img
                        key={image.id}
                        fluid={image.image.fluid}
                        title={image.title}
                        alt={image.altText}
                    />
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;
