import styles from "./Card.module.css";
import CardEntry, { TechnicalCardEntry, type AnyCardEntry } from "./CardEntry.tsx";

export interface CardSectionProps {
    title: string;
    subtitle?: string;
    entries: AnyCardEntry[];
}

const CardSection = ({title, subtitle, entries}: CardSectionProps) => {
    return (
        <section className={styles.cardSection}>
            <h2 className={styles.cardSectionTitle}>{title}</h2>
            {subtitle && <h3 className={styles.cardSectionSubtitle}>{subtitle}</h3>}

            {entries.map((entry, index) => {
                // Build the CardEntry type corresponding to its kind
                switch (entry.kind) {
                    case "TECHNICAL":
                        return <TechnicalCardEntry key={`${title}-entry-${index}`} {...entry.props}/>;
                    case "BASIC":
                    default:
                        return <CardEntry key={`${title}-entry-${index}`}{...entry.props}/>;
                }
            })}
        </section>
    );
};

export default CardSection;
