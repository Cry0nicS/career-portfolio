import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactElement} from "react";

import styles from "./footer.module.scss";

const Footer = (): ReactElement => (
    <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()}</span>
        <div className={styles.socialLinks}>
            <a href="https://github.com/Cry0nicS/gamer-portofolio" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" title="GitHub" />
            </a>
            <a href="https://twitter.com/Cry0nicS" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" title="Twitter" />
            </a>
        </div>
    </footer>
);

export default Footer;
