import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactElement} from "react";

import {esportsEventItems} from "../../../constants/resume";

import styles from "./esports-events.module.scss";

const EsportsEvents = (): ReactElement => (
    <section className={styles.section}>
        <div className={styles.heading}>
            <h3>Esports events</h3>
            <span>Memorable moments</span>
        </div>
        <div className={styles.esportsEvents}>
            {esportsEventItems.map((event) => (
                <div className={styles.entry} key={event.id}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={["fas", "trophy"]} size="lg" color="#c00" />
                    </div>
                    <div className={styles.content}>
                        <h3>{event.title}</h3>
                        <span className={styles.date}>{event.date}</span>
                        <span>{event.prizePool}</span>
                        <span>{event.location}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default EsportsEvents;
