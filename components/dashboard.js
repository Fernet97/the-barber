import styles from './dashboard.module.css'

export default function Dashboard({ children }) {
  return (
    <div className= {styles.PageMain}>
      <div  className= {styles.cover}>
          {children}
      </div>
    </div>
  );
}
