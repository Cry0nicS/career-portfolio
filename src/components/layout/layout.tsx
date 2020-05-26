import React, {ReactNode} from "react";
import {graphql, useStaticQuery} from "gatsby";

import Header from "../header/header";
import "./layout.scss";
import Footer from "../footer/footer";

interface Props {
    children: ReactNode;
}

const layout = ({children}: Props) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

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

export default layout;
