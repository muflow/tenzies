import styles from './Die.module.css';

export default function Die({ value, isHeld, holdDice }) {
  const stylez = {
    backgroundColor: isHeld ? '#59E391' : 'white',
  };
  return (
    <div className={styles.dieFace} style={stylez} onClick={holdDice}>
      <h2 className={styles.dieNum}>{value}</h2>
    </div>
  );
}
