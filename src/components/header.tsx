import {Link} from "gatsby";
import React from "react";

interface Props {
    siteTitle: string;
}

const header = ({siteTitle}: Props) => (
    <header>
        <div>
            <h1 style={{margin: 0}}>
                <Link to="/">{siteTitle}</Link>
            </h1>
        </div>
    </header>
);

export default header;
