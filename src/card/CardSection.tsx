import styles from "./Card.module.css";
import CardEntry, { type CardEntryProps } from "./CardEntry.tsx";

export interface CardSectionProps {
    title: string;
    subtitle?: string;
    entries: Omit<CardEntryProps, "id">[];
}

const CardSection = ({title, subtitle, entries}: CardSectionProps) => {
    return (
        <section className={styles.cardSection}>
            <div className={styles.cardSection}>
                <h2>{title}</h2>
                {subtitle && <h3>{subtitle}</h3>}

                {entries.map((entry, index) => (
                    <CardEntry
                        id={`cardEntry-${title}-${index}`}
                        {...entry}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
