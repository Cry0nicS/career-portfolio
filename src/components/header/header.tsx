import React, {ReactElement} from "react";

import bioElements from "../../constants/bio-items";
import Bio from "../bio/bio";

import Avatar from "./avatar/avatar";

import styles from "./header.module.scss";

const Header = (): ReactElement => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Avatar title={"The four elements avatar inspired from Legend of Korra"} />
                <div className={styles.title}>
                    <h1>Adrian Popescu</h1>
                    <h3>Software engineer and esports enthusiast</h3>
                </div>
            </div>
            <Bio items={bioElements} />
        </header>
    );
};

export default Header;
