import React from "react";

import styles from "./about.module.scss";

const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h3>About me</h3>
                <span>The voice of reason</span>
            </div>
            <div className={styles.about}>
                <p>
                    Driven by passion, I spend my time developing esports products and solutions
                    during the day and gaming or organizing events during the night. My enthusiasm
                    spur my way into trying out different environments and activities, while my
                    thirst for knowledge has taken me around the globe.
                </p>
                <p>
                    I love hiking and enjoy spending time on the summit. I used to ride the bike for
                    hours along the Danube, but traded it for hours of swimming in turquoise
                    lagoons. I shape newcomers, encourage and motivate people to get involved into
                    esports. I attend events all over the world while actively supporting and
                    developing the local gaming scene.
                </p>
            </div>
        </section>
    );
};

export default About;
