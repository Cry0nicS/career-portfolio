import {graphql, useStaticQuery} from "gatsby";
import React, {ReactElement} from "react";
import styles from "./experience.module.scss";

interface ExperienceQuery {
    data: {
        nodes: Array<{
            companyName: string;
            id: string;
            location: string;
            position: string;
            startDate: string;
            endDate: string | null;
            description: {description: string};
        }>;
    };
}

const getExperienceData = graphql`
    {
        data: allContentfulProfessionalExperience(sort: {fields: endDate, order: DESC}) {
            nodes {
                companyName
                id
                location
                position
                description {
                    description
                }
                startDate(formatString: "MMMM, YYYY")
                endDate(formatString: "MMMM, YYYY")
            }
        }
    }
`;

const Experience = (): ReactElement => {
    const {
        data: {nodes: allExperienceItems}
    }: ExperienceQuery = useStaticQuery(getExperienceData);

    return (
        <section>
            <div className={styles.heading}>
                <h3>Professional experience</h3>
                <span>Engineering the future</span>
            </div>
            <div className={styles.experience}>
                {allExperienceItems.map((item) => (
                    <div className={styles.entry} key={item.id}>
                        <div className={styles.timelineMark} />
                        <div className={styles.info}>
                            <div>
                                <span className={styles.date}>
                                    {item.startDate} - {item.endDate ?? "Present"}
                                </span>
                                <h3>{item.companyName}</h3>
                                <span>{item.position}</span>
                                <span className={styles.location}>{item.location}</span>
                            </div>
                            <div className={styles.description}>{item.description.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
