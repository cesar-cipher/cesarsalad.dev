import appStyles from "./App.module.css";
import cardStyles from "./card/Card.module.css";
import componentStyles from "./component/Component.module.css";

import CardSection from "./card/CardSection.tsx";

import { sections } from "./data/CardEntryData.tsx";


function App() {
  return (
    <div className={appStyles.App}>
      <nav className={appStyles.nav}>
        {/* NavBar will go here */}
      </nav>

      <main className={cardStyles.cardDeck}>
        {/* It's cleaner to put the data in a separate file, 
            so it can be edited quickly without modifying code. */}
        {sections.map((section) => (
          <CardSection key={section.title} {...section} />
        ))}
      </main>

      <footer className={appStyles.footer}>
        
      </footer>
    </div>
  )
}

export default App;
