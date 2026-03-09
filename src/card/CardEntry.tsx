import styles from "./Card.module.css";

export interface CardEntryProps {
    id: string;
    title: string;
    subtitle?: string;
    location?: string;
    description: string;
}

const CardEntry = ({id, title, subtitle, location, description}: CardEntryProps) => {
    return (
        <div className={styles.cardEntry} key={id} id={id}>
            <div className={styles.cardEntryHeader}>
                <h3>{title}</h3>
                {subtitle && <h4>{subtitle}</h4>}
                {location && <div className={styles.cardEntryLocation}>{location}</div>}
            </div>

            {/* Render the string in CardEntry.description as HTML */}
            <div className={styles.cardEntryDesc} dangerouslySetInnerHTML={{ __html: description }}/>
        </div>
    );
};

export default CardEntry;
