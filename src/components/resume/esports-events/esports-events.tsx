import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactElement} from "react";

import {esportsEventItems} from "../../../constants/resume";

import styles from "./esports-events.module.scss";

const EsportsEvents = (): ReactElement => (
    <section>
        <div className={styles.heading}>
            <h3>Esports events</h3>
            <span>Memorable moments</span>
        </div>
        <div className={styles.esportsEvents}>
            {esportsEventItems.map((event) => (
                <div className={styles.entry} key={event.id}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={["fas", "trophy"]} size="lg" />
                    </div>
                    <div className={styles.content}>
                        <span className={styles.date}>{event.date}</span>
                        <h3>{event.title}</h3>
                        <div className={styles.prizePool}>
                            Prize Pool:
                            <span>{` ${event.prizePool}`}</span>
                        </div>
                        <span className={styles.location}>{event.location}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default EsportsEvents;
