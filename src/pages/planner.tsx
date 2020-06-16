import {graphql, useStaticQuery} from "gatsby";
import React, {ReactElement} from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";

import styles from "../styles/pages/planner.module.scss";

interface TrelloCardQuery {
    board: {
        lists: [
            {
                cards: [
                    {
                        name: string;
                        id: string;
                    }
                ];
                id: string;
                name: string;
            }
        ];
        prefs: {
            backgroundImage: string;
        };
    };
}

const getTrelloCards = graphql`
    {
        board: trelloBoard(name: {eq: "Career portofolio"}) {
            lists {
                cards {
                    id
                    name
                }
                id
                name
            }
            prefs {
                backgroundImage
            }
        }
    }
`;

const PlannerPage = (): ReactElement => {
    const {
        board: {
            lists,
            prefs: {backgroundImage}
        }
    }: TrelloCardQuery = useStaticQuery(getTrelloCards);

    const listElements = lists.map((list) => {
        const cardElements = list.cards.map((card) => (
            <div className={styles.card} key={`${list.id}-${card.id}`}>
                <span>{card.name}</span>
            </div>
        ));

        return (
            <div className={styles.list} key={list.id}>
                <h3>{list.name}</h3>
                {cardElements}
            </div>
        );
    });

    return (
        <Layout>
            <Metadata
                pageTitle="Planning system"
                pageDescription="List of features planned for implementation and their current status."
            />
            {/* Todo: Check if the retrieved image can be parsed by Gatsby's Image plugin. */}
            <div className={styles.planner} style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className={styles.title}>
                    <h3>Development planning system</h3>
                    <span>This project is under continuous development.</span>
                </div>
                <div className={styles.board}>{listElements}</div>
                <div className={styles.footnote}>
                    <span>
                        All data, including the background, image is fetched using Trello's API.
                    </span>
                    <span>Refresh time interval is 24 hours.</span>
                </div>
            </div>
        </Layout>
    );
};

export default PlannerPage;
