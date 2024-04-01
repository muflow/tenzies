import styles from './Die.module.css'

export default function Die({ value }) {
    return(
    <div className={styles.dieFace}>
        <h2 className={styles.dieNum}>{value}</h2>
    </div>
    )
}