import React, {ReactNode} from "react";

import Footer from "../footer/footer";
import Header from "../header/header";

import "./layout.scss";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="page">
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
