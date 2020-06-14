import React from "react";
import {ExperienceItems} from "../../../constants/resume";
import styles from "./experience.module.scss";

const Experience = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h3>Professional experience</h3>
                <span>Engineering the future</span>
            </div>
            <div className={styles.experience}>
                {ExperienceItems.map((item) => {
                    return (
                        <div className={styles.entry} key={item.id}>
                            <div className={styles.timelineMark} />
                            <div className={styles.info}>
                                <div>
                                    <span className={styles.date}>{item.date}</span>
                                    <h3>{item.companyName}</h3>
                                    <span>{item.position}</span>
                                    <span>{item.location}</span>
                                </div>
                                <div>{item.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
