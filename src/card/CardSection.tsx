import styles from "./Card.module.css";
import CardEntry, { TechnicalCardEntry, type CardEntryProps, type TechnicalCardEntryProps } from "./CardEntry.tsx";

export interface CardSectionProps {
    title: string;
    subtitle?: string;
    kind?: "BASIC" | "TECHNICAL";
    entries: (CardEntryProps | TechnicalCardEntryProps)[];
}

const CardSection = ({title, subtitle, kind, entries}: CardSectionProps) => {
    // Build the CardEntry elements inside this section corresponding to the section's kind
    const renderEntry = (entry: CardEntryProps | TechnicalCardEntryProps, index: number) => {
        switch (kind) {
            case "TECHNICAL":
                return <TechnicalCardEntry key={`${title}-entry-${index}`} {...entry as TechnicalCardEntryProps}/>;
            case "BASIC":
            default:
                return <CardEntry key={`${title}-entry-${index}`} {...entry as CardEntryProps}/>;
        }
    };

    return (
        <section className={styles.cardSection}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}

            {entries.map((entry, index) => renderEntry(entry, index))}
        </section>
    );
};

export default CardSection;
