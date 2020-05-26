import React, {ReactNode} from "react";
import {graphql, useStaticQuery} from "gatsby";

import Footer from "../footer/footer";
import Header from "../header/header";
import "./layout.scss";

interface Props {
    children: ReactNode;
}

interface MetaQuery {
    site: {
        siteMetadata: {
            title: string;
        };
    };
}

const Layout = ({children}: Props) => {
    const data: MetaQuery = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
