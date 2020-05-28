import {Link} from "gatsby";
import React from "react";

import Avatar from "../avatar/avatar";

interface Props {
    siteTitle: string;
}

const Header = ({siteTitle}: Props) => (
    <header>
        <Avatar title={"The four elements avatar inspired from Legend of Korra"} />
        <div>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
        </div>
    </header>
);

export default Header;
