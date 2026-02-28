import styles from "./Card.module.css";

export interface CardEntryProps {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
}

const CardEntry = ({id, title, subtitle, description}: CardEntryProps) => {
    return (
        <div className={styles.cardEntry} key={id} id={id}>
            <h3>{title}</h3>
            {subtitle && <h4>{subtitle}</h4>}
            {description}
        </div>
    );
};

export default CardEntry;