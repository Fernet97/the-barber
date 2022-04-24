import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect, useRef} from 'react';
import {motion} from "framer-motion";
import styles from './administrator.module.css'
import Fade from '@stahl.luke/react-reveal/Fade';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


export default function Administrator() {


  return (
    <motion.div
      key="administrator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Administrator</title>
      </Head>

      <div className= {styles.PageMain}>
        <div  className= {styles.cover}>
            <h2>~ Pannello Amministratore ~</h2>
            <ScheduleComponent>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>

            </ScheduleComponent>
        </div>
      </div>

    </motion.div>
  )
}
