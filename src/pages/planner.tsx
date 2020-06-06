import {graphql, useStaticQuery} from "gatsby";
import React from "react";

import "../../assets/styles/pages/planner.scss";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";

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

const PlannerPage = () => {
    const {
        board: {
            lists,
            prefs: {backgroundImage}
        }
    }: TrelloCardQuery = useStaticQuery(getTrelloCards);

    const listElements = lists.map((list) => {
        const cardElements = list.cards.map((card) => {
            return (
                <div className="trello-card" key={`${list.id}-${card.id}`}>
                    <span>{card.name}</span>
                </div>
            );
        });

        return (
            <div className="trello-list" key={list.id}>
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
            <div className="planner" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="title">
                    <h3>Development planning system</h3>
                    <span>This project is under continuous development.</span>
                </div>
                <div className="trello-board">{listElements}</div>
                <div className="footer-note">Data is updated from Trello once every 24 hours</div>
            </div>
        </Layout>
    );
};

export default PlannerPage;
