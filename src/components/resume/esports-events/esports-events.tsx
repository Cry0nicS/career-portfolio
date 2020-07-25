import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {graphql, useStaticQuery} from "gatsby";
import React, {ReactElement} from "react";

import styles from "./esports-events.module.scss";

interface EsportsEventsQuery {
    data: {
        nodes: Array<{
            id: string;
            title: string;
            location: string;
            date: string;
            description: {description: string};
            prizePool: number;
        }>;
    };
}

const getEsportsEventsData = graphql`
    {
        data: allContentfulEsportsEvents(sort: {fields: prizePool, order: DESC}) {
            nodes {
                date(formatString: "YYYY")
                id
                location
                prizePool
                title
            }
        }
    }
`;

const EsportsEvents = (): ReactElement => {
    const {
        data: {nodes: events}
    }: EsportsEventsQuery = useStaticQuery(getEsportsEventsData);

    return (
        <section>
            <div className={styles.heading}>
                <h3>Esports events</h3>
                <span>Memorable moments</span>
            </div>
            <div className={styles.esportsEvents}>
                {events.map((event) => (
                    <div className={styles.entry} key={event.id}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={["fas", "trophy"]} size="lg" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{event.date}</span>
                            <h3>{event.title}</h3>
                            <div className={styles.prizePool}>
                                Prize Pool:
                                <span>
                                    {new Intl.NumberFormat("en-Us", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(event.prizePool)}
                                </span>
                            </div>
                            <span className={styles.location}>{event.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EsportsEvents;
