import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect, useRef} from 'react';
import {motion} from "framer-motion";
import styles from './areaPrenotazione.module.css'
import Fade from '@stahl.luke/react-reveal/Fade';
import { FaBell, FaUserAlt} from "react-icons/fa";


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
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and t
                    </p>
                </div>
             </Fade>
        </div>

      <div className= {styles.ImgDiv}>
            <div  className= {styles.cover}>
              <div  className= {styles.NavTop}>
                  <div>Cronologia prenotazioni</div>
                  <div>
                    <FaBell style={{color: 'white', fontSize: '2vw'}}/>
                    <FaUserAlt style={{color: 'white', fontSize: '2vw', }}/>
                  </div>
              </div>
            </div>
          <div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}
