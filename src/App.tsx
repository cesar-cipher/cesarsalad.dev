import './App.css'
import styles from "./card/Card.module.css";
import CardSection from "./card/CardSection.tsx";
import { sections } from "./data/CardEntryData.tsx";


function App() {
  return (
    <>
      {/* NavBar will go here */}

      <div className={styles.cardDeck}>
        {/* It's cleaner to put the data in a separate file, 
            so it can be edited quickly without modifying code. */}
        {sections.map((section) => (
          <CardSection key={section.title} {...section} />
        ))}
      </div>
    </>
  )
}

export default App
