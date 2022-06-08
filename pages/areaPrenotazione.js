import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect, useRef} from 'react';
import {motion} from "framer-motion";
import Fade from '@stahl.luke/react-reveal/Fade';
import Layout from '../components/layout';
import styles from './areaPrenotazione.module.css'


export default function AreaPrenotazione() {

  const [burla, setBurla] = useState(false);

  useEffect(() => {
    setBurla(true)
  } , []); // componente montato



  return (
    <Layout>
      <motion.div
        key="prenotazione"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Head>
        <title>Area Prenotazione</title>
      </Head>

      <div className= {styles.PageMain}>
        <div  className= {styles.cover}>
        </div>
      </div>
      </motion.div>
    </Layout>
  )
}
