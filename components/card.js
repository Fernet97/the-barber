import styles from './card.module.css'

export default function Card(props) {
  return (
      <div className={styles.cardX}>
        <div className={styles.borderX}>
          <h2>Al Pacino</h2>
          <div>
            <p>prova prova</p>
          </div>
        </div>
      </div>
  );
}
