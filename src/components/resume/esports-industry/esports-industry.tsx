import React, {ReactElement} from "react";
import {esportsIndustryItems} from "../../../constants/resume";

import styles from "./esports-industry.module.scss";

const EsportsIndustry = (): ReactElement => (
    <section>
        <div className={styles.heading}>
            <h3>Esports activity</h3>
            <span>Gaming is not just a game</span>
        </div>
        <div className={styles.esportsIndustry}>
            {esportsIndustryItems.map((item) => (
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
                        <span>{item.timeline}</span>
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default EsportsIndustry;
