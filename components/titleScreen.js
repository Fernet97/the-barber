import styles from './titleScreen.module.css'

export default function TitleScreen({ children }) {
  return (
    <div className= {styles.PageMain}>
      <div  className= {styles.cover}>
          {children}
      </div>
    </div>
  );
}
