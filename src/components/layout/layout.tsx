import React, {ReactElement, ReactNode} from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

import styles from "./layout.module.scss";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props): ReactElement => (
    <div className={styles.page}>
        <div className={styles.content}>
            <Header />
            <main>{children}</main>
        </div>
        <Footer />
    </div>
);

export default Layout;
