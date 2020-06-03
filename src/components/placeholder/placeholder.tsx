import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React from "react";

import "./placeholder.scss";

interface PlaceholderProps {
    description: JSX.Element | string;
    icon: FontAwesomeIconProps;
    height?: string;
    title: JSX.Element | string;
}

const Placeholder = ({description, icon, height = "200px", title}: PlaceholderProps) => {
    return (
        <section className="placeholder" style={{minHeight: height}}>
            <div className="placeholder-content">
                <FontAwesomeIcon {...icon} />
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </section>
    );
};

export default Placeholder;
