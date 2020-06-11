import React from "react";
import {Chart} from "react-google-charts";

import styles from "./stack-activity.module.scss";

const StackActivity = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h3>Stack activity</h3>
                <span>Coding my way through life</span>
            </div>
            <div className={styles.about}>
                <Chart
                    width={"100%"}
                    height={"230px"}
                    chartType="Gantt"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            {type: "string", label: "Task ID"},
                            {type: "string", label: "Task Name"},
                            {type: "string", label: "Resource"},
                            {type: "date", label: "Start Date"},
                            {type: "date", label: "End Date"},
                            {type: "number", label: "Duration"},
                            {type: "number", label: "Percent Complete"},
                            {type: "string", label: "Dependencies"}
                        ],
                        [
                            "Java",
                            "Java",
                            "EJBComponents, Spring FW, Helix FW,",
                            new Date(2012, 1, 1),
                            new Date(2015, 6, 1),
                            null,
                            100,
                            null
                        ],
                        [
                            "ActionScript",
                            "ActionScript 2014",
                            "Adobe Flex...",
                            new Date(2014, 6, 1),
                            new Date(2015, 6, 1),
                            null,
                            100,
                            null
                        ],
                        [
                            "PHP",
                            "PHP",
                            "Laravel/Lumen, Zend Framework (Laminas ), Zend Expressive (Mezzio), Twig",
                            new Date(2015, 8, 15),
                            new Date(),
                            null,
                            100,
                            null
                        ],
                        [
                            "TypeScript",
                            "TypeScript",
                            "React, Aurelia",
                            new Date(2016, 7, 1),
                            new Date(),
                            null,
                            100,
                            null
                        ],
                        [
                            "HTML",
                            "HTML & CSS/SASS",
                            "Foundation",
                            new Date(2015, 8, 15),
                            new Date(),
                            null,
                            100,
                            null
                        ]
                    ]}
                    options={{
                        gantt: {
                            trackHeight: 35,
                            innerGridTrack: {fill: "#26282d"},
                            innerGridDarkTrack: {fill: "#202126"},
                            labelStyle: {
                                fontSize: 20,
                                color: "#757575"
                            },
                            percentEnabled: false,
                            labelMaxWidth: 200,
                            criticalPathEnabled: false
                        },
                        // @ts-ignore -- error in the plugin.
                        backgroundColor: {fill: "#737682"}
                    }}
                />
            </div>
        </section>
    );
};

export default StackActivity;
