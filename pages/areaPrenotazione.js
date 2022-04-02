import Head from 'next/head'
import Link from 'next/link'
import {motion} from "framer-motion";
import Layout from '../components/layout'


export default function AreaPrenotazione() {
  return (
    <motion.div
      key="prenotazione"
      initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Layout>
          <Head>
            <title>Area Prenotazione</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"/>
            <link rel="shortcut icon" href="/public/favicon.png" />
          </Head>

          <h1>Area Prenotazione</h1>
          <Link href='/'>
            <a>Torna al Menu</a>
          </Link>
        </Layout>
    </motion.div>
  )
}
