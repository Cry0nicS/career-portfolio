import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";
import React, {ReactElement} from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";
import Placeholder from "../components/placeholder/placeholder";

const NotFound = (): ReactElement => {
    const placeholderIcon: FontAwesomeIconProps = {
        icon: ["fas", "space-shuttle"],
        size: "6x",
        color: "#96a786",
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
