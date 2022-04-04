import TitleScreen from '../components/titleScreen'
import Dashboard from '../components/dashboard'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../components/card'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Fade from '@stahl.luke/react-reveal/Fade';
import React, { useState, useEffect, useRef} from 'react';
import {motion} from "framer-motion";


export default function Home() {

    const [burla, setBurla] = useState(false);
    const colors = ["#f90", "#ef0", "#e0f"]

    useEffect(() => {
      clickButton()
    } , []); // componente montato

    function clickButton() {
      if(burla) setBurla(false);
      else setBurla(true);
    }

    return (
      < motion.div
        key="home"
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}>

        <Head>
          <title>UpperClass</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Klee One|Italiana"/>
        </Head>

          <ParallaxProvider>

            <TitleScreen>
              <Parallax speed={-10}>
              <Fade spy={burla} bottom cascade>
                  <div>
                    <h2>~ Barber Shop ~</h2>
                    <h1>UPPER CLASS</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
               </Fade>
              </Parallax>
            </TitleScreen>

            <Dashboard>
              <Parallax speed={-10}>
                  <div class= "CardLayout">
                    <Card
                        title = "Prenotati"
                        imgPath = "images/Me.png"
                        link = "/areaPrenotazione"
                     />

                     <Card
                         title = "Listino servizi"
                         descr = "Lista parole usate"
                         imgPath = "/images/icon-192x192.png"
                         link = "/"
                      />

                      <Card
                          title = "Dove siamo"
                          descr = "Lista parole usate"
                          imgPath = "/images/icon-192x192.png"
                          link = "/"
                       />

                      <Card
                          title = "Gallery"
                          descr = "Pierluigi Liguori"
                          imgPath = "/images/icon-192x192.png"
                          link = "/rules"
                       />
                       <Card
                           title = "Promo"
                           descr = "Pierluigi Liguori"
                           imgPath = "/images/icon-192x192.png"
                           link = "/rules"
                        />
                  </div>
              </Parallax>
            </Dashboard>

          </ParallaxProvider>

      </motion.div>
    )
  }
