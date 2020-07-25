import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

interface BioElements {
    fontAwesomeIconProps: FontAwesomeIconProps;
    title: string;
    name: string;
    url?: string;
}

// While not re-used, moved to a different file to reduce complexity.
const bioElements: BioElements[] = [
    {
        fontAwesomeIconProps: {
            icon: ["fab", "discord"],
            size: "lg"
        },
        title: "Discord",
        name: "Cry0nicS#9999",
        url: "https://discordapp.com/users/147264738609463296/"
    },
    {
        fontAwesomeIconProps: {
            icon: ["fas", "map-marker-alt"],
            size: "lg"
        },
        title: "Location",
        name: "Malta, Europe",
        url: "https://goo.gl/maps/VJX4uZVEvfMFr4HQ8"
    },
    {
        fontAwesomeIconProps: {
            icon: ["fab", "chrome"],
            size: "lg"
        },
        title: "Website",
        name: "AdrianPopescu.dev",
        url: "https://adrianpopescu.dev/"
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
            icon: ["fas", "envelope"],
            size: "lg"
        },
        title: "Email",
        name: "Email me",
        url: "mailto:AdrianPopescu@yahoo.com?subject=Greeting from your website"
    },
    {
        fontAwesomeIconProps: {
            icon: ["fab", "steam"],
            size: "lg"
        },
        title: "Steam",
        name: "Cry0nicS",
        url: "https://steamcommunity.com/id/Cry0nicS/"
    }
];

export default bioElements;
