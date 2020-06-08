import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React from "react";

import * as styles from "./placeholder.module.scss";

interface PlaceholderProps {
    description: JSX.Element | string;
    icon: FontAwesomeIconProps;
    height?: string;
    title: JSX.Element | string;
}

const Placeholder = ({description, icon, height = "200px", title}: PlaceholderProps) => {
    return (
        <section className={styles.placeholder} style={{minHeight: height}}>
            <div className="placeholder-content">
                <FontAwesomeIcon {...icon} />
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </section>
    );
};

export default Placeholder;
