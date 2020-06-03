import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";
import React from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";
import Placeholder from "../components/placeholder/placeholder";

const NotFound = () => {
    const placeholderIcon: FontAwesomeIconProps = {
        icon: ["fas", "space-shuttle"],
        size: "6x",
        color: "#dc4b3f",
        title: "Tribute to Falcon 9"
    };

    const returnToIndexLink = <Link to="/">Click here to return your rocket home...</Link>;

    return (
        <Layout>
            <Metadata pageTitle="404" />
            <Placeholder
                icon={placeholderIcon}
                title={"Space station not found..."}
                description={returnToIndexLink}
                height={"520px"}
            />
        </Layout>
    );
};

export default NotFound;
