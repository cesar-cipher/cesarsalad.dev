import styles from "./Card.module.css";

import { useState } from 'react';

interface DescExpansionProps {
    previewText: string;        // Button preview text
    expansionText: string;       // Text to be revealed after clicking preview button
}

const DescExpansion = ({previewText, expansionText}: DescExpansionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.descExpansion} ${isOpen ? styles.open : ""}`}>
            <button className={styles.descExpansionTrigger} onClick={() => setIsOpen(prev => !prev)}>
                <span className={`${styles.descExpansionPreview} ${isOpen ? styles.open : ""}`}>
                    {previewText}
                </span>
            </button>

            {isOpen && <span className={styles.expansionText} dangerouslySetInnerHTML={{__html: expansionText}}/>}
        </div>
    );
}

export default DescExpansion;
