import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>&copy; {new Date().getFullYear()}</span>
            <span>Made with &#9829;</span>
            <div className="social-links">
                <a href="https://github.com/Cry0nicS/gamer-portofolio" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg" title="GitHub" />
                </a>
                <a href="https://twitter.com/Cry0nicS" target="_blank">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" title="Twitter" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
