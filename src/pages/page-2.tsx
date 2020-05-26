import React from "react";
import {Link, PageProps} from "gatsby";

import Layout from "../components/layout/layout";

const SecondPage = (props: PageProps) => (
    <Layout>
        <h1>BUT I TOLD YOU NOT TO CLICK THAT LINK...</h1>
        <p>Now you arrived nowhere... I mean... ({props.path})</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default SecondPage;
