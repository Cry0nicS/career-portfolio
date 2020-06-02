// Import font-awesome icons.
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {Link} from "gatsby";
import React from "react";
import "../../assets/styles/main.scss";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";

library.add(fab, fas);

const IndexPage = () => (
    <Layout>
        <Metadata pageTitle="Welcome" />
        <h1>Hi people</h1>
        <p>Welcome to my new career portfolio.</p>
        <p>Now I'll go build something great.</p>
        <Link to="/page-2/">Please don't click...</Link>
        <br />
        <Link to="/404">If you insist... check out 404 page</Link>
    </Layout>
);

export default IndexPage;
