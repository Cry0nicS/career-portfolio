import React from "react";

import styles from "./stack-activity.module.scss";

const StackActivity = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h3>Stack activity</h3>
                <span>Coding my way through life</span>
            </div>
            <div className={styles.about}>
                <p>Make grant chat.</p>
            </div>
        </section>
    );
};

export default StackActivity;
