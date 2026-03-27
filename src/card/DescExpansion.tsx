import styles from "./Card.module.css";

import { useState } from 'react';

interface DescExpansionProps {
    previewText: string;        // Button preview text
    detailText: string;         // Text to be revealed after clicking preview button
}

const DescExpansion = ({previewText, detailText}: DescExpansionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.descExpansion} ${isOpen ? styles.open : ""}`}>

            <button className={styles.trigger} onClick={() => setIsOpen(prev => !prev)}>
                <span className={`${styles.preview} ${isOpen ? styles.open : ""}`}>{previewText}</span>
                <span className={styles.icon}>{isOpen ? "Click to hide -" : "Click to expand +"}</span>
            </button>

            <span className={`${styles.detail}`} dangerouslySetInnerHTML={{__html: detailText}}/>

        </div>
    );
}

export default DescExpansion;
