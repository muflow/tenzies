import { useState, useId } from 'react';

import styles from './App.module.css';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const dieId = useId();

  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(getRandomIntInclusive(1, 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceList = dice.map((die) => <Die key={dieId} value={die} />);

  return (
    <main className={styles.main}>
      <div className={styles.diceContainer}>{diceList}</div>
      <button className={styles.rollDice} onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
