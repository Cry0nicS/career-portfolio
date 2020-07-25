import {graphql, useStaticQuery} from "gatsby";
import React, {ReactElement} from "react";

import styles from "./esports-industry.module.scss";

interface EsportsIndustryQuery {
    data: {
        nodes: Array<{
            id: string;
            title: string;
            position: number;
            date: string;
            description: {description: string};
        }>;
    };
}

const getEsportsIndustryData = graphql`
    {
        data: allContentfulEsportsIndustry(sort: {fields: position}) {
            nodes {
                id
                date
                description {
                    description
                }
                position
                title
            }
        }
    }
`;

const EsportsIndustry = (): ReactElement => {
    const {
        data: {nodes: allItems}
    }: EsportsIndustryQuery = useStaticQuery(getEsportsIndustryData);

    return (
        <section>
            <div className={styles.heading}>
                <h3>Esports activity</h3>
                <span>Gaming is not just a game</span>
            </div>
            <div className={styles.esportsIndustry}>
                {allItems.map((item) => (
                    <div className={styles.entry} key={item.id}>
                        <div className={styles.position}>
                            <h3>
                                {new Intl.NumberFormat("en-IN", {
                                    minimumIntegerDigits: 2
                                }).format(item.position)}
                            </h3>
                        </div>
                        <div className={styles.content}>
                            <h3>{item.title}</h3>
                            <span>{item.date}</span>
                            {item.description.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EsportsIndustry;
