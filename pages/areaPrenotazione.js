import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect, useRef} from 'react';
import {motion} from "framer-motion";
import styles from './areaPrenotazione.module.css'
import Fade from '@stahl.luke/react-reveal/Fade';


export default function AreaPrenotazione() {

  const [burla, setBurla] = useState(false);

  useEffect(() => {
    setBurla(true)
  } , []); // componente montato



  return (
    <motion.div
      key="prenotazione"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <Head>
      <title>Area Prenotazione</title>
    </Head>

    <div className = {styles.Container}>

        <div className= {styles.nav}>
            <Fade spy={burla} bottom cascade>
                <div className= {styles.cover}>
                  <Link href='/'>
                    <p>Torna al Menu</p>
                  </Link>
                    <p>~ Servizio da effettuare ~</p>
                    <h2>UPPER CLASS</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and t
                    </p>
                </div>
             </Fade>
        </div>

      <div className= {styles.ImgDiv}>
            <div  className= {styles.cover}>
              <div  className= {styles.NavTop}>
                  <div>ciao</div>
                  <div>Cronologia prenotazioni</div>
                  <div>Prova</div>
              </div>
            </div>
          <div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}
