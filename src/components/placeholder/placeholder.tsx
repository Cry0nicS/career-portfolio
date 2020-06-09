import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./placeholder.module.scss";

interface PlaceholderProps {
    description: JSX.Element | string;
    icon: FontAwesomeIconProps;
    height?: string;
    title: JSX.Element | string;
}

const Placeholder = ({description, icon, height = "200px", title}: PlaceholderProps) => {
    return (
        <section className={styles.section} style={{minHeight: height}}>
            <div className={styles.content}>
                <FontAwesomeIcon {...icon} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </section>
    );
};

export default Placeholder;
