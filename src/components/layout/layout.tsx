import React, {ReactNode} from "react";

import BioItems from "../../constants/bio-items";
import Bio from "../bio/bio";
import Footer from "../footer/footer";
import Header from "../header/header";

import styles from "./layout.module.scss";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <Header />
                <Bio items={BioItems} />
                <main className="main-content">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
