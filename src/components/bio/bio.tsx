import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./bio.module.scss";

interface BioElement {
    fontAwesomeIconProps: FontAwesomeIconProps;
    title: string;
    name: string;
    url?: string;
}

const Bio = ({items}: {items: BioElement[]}) => {
    const bioItems = items.map((item) => {
        return (
            <li className={styles.item} key={item.name + item.title}>
                <FontAwesomeIcon {...item.fontAwesomeIconProps} />
                <span className={styles.itemTitle}>{item.title}</span>
                {buildBioName(item)}
            </li>
        );
    });

    return (
        <div className={styles.content}>
            <ul className={styles.list}>{bioItems}</ul>
        </div>
    );
};

/**
 * Returns the name of the BioElement with or without an external link, depending on the "url" property.
 */
function buildBioName(item: BioElement) {
    if (item.url) {
        return (
            <a href={item.url} target="_blank">
                {item.name}
            </a>
        );
    }

    return item.name;
}

export default Bio;
