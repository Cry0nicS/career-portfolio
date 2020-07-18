import React, {ReactElement} from "react";
import {experienceItems} from "../../../constants/resume";
import styles from "./experience.module.scss";

const Experience = (): ReactElement => (
    <section>
        <div className={styles.heading}>
            <h3>Professional experience</h3>
            <span>Engineering the future</span>
        </div>
        <div className={styles.experience}>
            {experienceItems.map((item) => (
                <div className={styles.entry} key={item.id}>
                    <div className={styles.timelineMark} />
                    <div className={styles.info}>
                        <div>
                            <span className={styles.date}>{item.date}</span>
                            <h3>{item.companyName}</h3>
                            <span>{item.position}</span>
                            <span className={styles.location}>{item.location}</span>
                        </div>
                        <div>{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
