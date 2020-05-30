import {Link, PageProps} from "gatsby";
import React from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";

const SecondPage = (props: PageProps) => (
    <Layout>
        <Metadata pageTitle="Secondary page" />
        <h1>BUT I TOLD YOU NOT TO CLICK THAT LINK...</h1>
        <p>Now you arrived nowhere... I mean... ({props.path})</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default SecondPage;
