import React from "react";
import About from "./about/about";
import EsportsEvents from "./esports-events/esports-events";
import EsportsIndustry from "./esports-industry/esports-industry";
import StackActivity from "./stack-activity/stack-activity";

const Resume = () => {
    return (
        <>
            <About />
            <EsportsIndustry />
            <EsportsEvents />
            <StackActivity />
        </>
    );
};

export default Resume;
