import { useState } from 'react'
import './App.css'
import CardDeck from "./card/CardDeck.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardDeck>
        <CardSection>

        </CardSection>
      </CardDeck>
    </>
  )
}

export default App
