import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React, {ReactNode} from "react";
import Bio from "../bio/bio";

import Footer from "../footer/footer";
import Header from "../header/header";

import "./layout.scss";

interface Props {
    children: ReactNode;
}

interface BioElements {
    fontAwesomeIconProps: FontAwesomeIconProps;
    title: string;
    name: string;
    url?: string;
}

const Layout = ({children}: Props) => {
    return (
        <div className="page">
            <Header />
            <Bio items={bioItems} />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

const bioItems: BioElements[] = [
    {
        fontAwesomeIconProps: {
            icon: ["fab", "pagelines"],
            size: "lg"
        },
        title: "Age",
        name: getAgeInYears("1990").toString()
    },
    {
        fontAwesomeIconProps: {
            icon: ["fas", "map-marker-alt"],
            size: "lg"
        },
        title: "Location",
        name: "Malta, Europe",
        url: "https://goo.gl/maps/p91fUuoDve92"
    },
    {
        fontAwesomeIconProps: {
            icon: ["fas", "phone-alt"],
            size: "lg"
        },
        title: "Phone",
        name: "(+40) 727 311 091",
        url: "tel:0040727311091"
    },
    {
        fontAwesomeIconProps: {
            icon: ["fab", "internet-explorer"],
            size: "lg"
        },
        title: "Website",
        name: "AdrianPopescu.dev",
        url: "https://adrianpopescu.dev/"
    },
    {
        fontAwesomeIconProps: {
            icon: ["fas", "envelope"],
            size: "lg"
        },
        title: "Email",
        name: "AdrianPopescu90@gmail.com",
        url: "mailto:AdrianPopescu90@gmail.com?subject=Greeting from your website"
    }
];

function getAgeInYears(birthYear: string) {
    const now = new Date();
    const dateOfBirth = new Date(birthYear);

    return now.getFullYear() - dateOfBirth.getFullYear();
}

export default Layout;
