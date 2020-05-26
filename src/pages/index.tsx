import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout/layout";

const IndexPage = () => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to my new career portfolio.</p>
        <p>Now I'll go build something great.</p>
        <Link to="/page-2/">Please don't click...</Link>
        <br />
        <Link to="/404">If you insist... check out 404 page</Link>
    </Layout>
);

export default IndexPage;
