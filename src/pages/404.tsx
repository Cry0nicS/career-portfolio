import React from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";

const NotFound = () => (
    <Layout>
        <Metadata title="404" />
        <h1>You are here!</h1>
        <h2>But nothing found for you #404</h2>
    </Layout>
);

export default NotFound;
