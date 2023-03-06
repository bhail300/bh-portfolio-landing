import Head from 'next/head'
import styles from '@/styles/LandingPage.module.css'
import { useState } from 'react'

//component
import Carousel from './components/carousel/carousel'
import Nav from './components/nav'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Site</title>
        <meta name="description" content="Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav/>
        <div className={styles.center}>
          <hr></hr>
          <div>
            <h1>Hello, my name is Blen Haile.</h1>
          </div>
          <div>
            <h2>I am a UI/UX designer, Front-end Web developer and a Graphic designer.</h2>
          </div>
          <div>
            <h2>Welcome to my website.</h2>
          </div>  
            <hr></hr>
            <div className={styles.container}>
              <h4>Check out my work below.</h4>
            </div>
        </div>

        <div className={styles.carousel_intro}>
          <p>Here are some of my featured projects:</p>
        </div>

        <div className={styles.carousel}>
          <Carousel/>
        </div>
      </main>
    </>
  )
}