import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className= {styles.App}>
      <div  className= {styles.main}>
          {children}
      </div>
    </div>
  );
}
