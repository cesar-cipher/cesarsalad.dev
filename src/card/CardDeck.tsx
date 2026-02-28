import styles from "./Card.module.css";
import CardSection from "./CardSection";

interface CardDeckProps {
    sections: typeof CardSection[];
}

const CardDeck = () => {
    return (
        <div className={styles.cardDeck}>
            <p>CardDeck</p>
            {sections.map(section) => (
                {section}
            )}
        </div>
    );
};

export default CardDeck;