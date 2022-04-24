import styles from './card.module.css'
import Link from 'next/link'

export default function Card(props) {
  return (
    <Link href = {props.link}>
    <div className= {styles.card}>
      <div>
        <p className={styles.titleCard}>{props.title}</p>
      </div>


    </div>
    </Link>
  );
}
