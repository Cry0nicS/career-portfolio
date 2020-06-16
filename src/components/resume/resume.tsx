import React, {ReactElement} from "react";

import About from "./about/about";
import EsportsEvents from "./esports-events/esports-events";
import EsportsIndustry from "./esports-industry/esports-industry";
import Experience from "./experience/experience";
import PhotoGallery from "./photo-gallery/photo-gallery";
import StackActivity from "./stack-activity/stack-activity";

const Resume = (): ReactElement => (
    <>
        <About />
        <EsportsIndustry />
        <EsportsEvents />
        <StackActivity />
        <Experience />
        <PhotoGallery />
    </>
);

export default Resume;
