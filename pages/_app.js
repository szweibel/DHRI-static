import Header from '../components/Header'
import '../styles/globals.css'
import '../node_modules/highlight.js/styles/obsidian.css'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { theme } from '../utils/theme';
import BackToTop from '../components/ScrollTop'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
const Footer = dynamic(() => import('../components/Footer'))

function MyApp({ Component, pageProps }) {
  const base = '/' + process.env.NEXT_PUBLIC_REPO_NAME
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
       <title>DHRI Curriculum</title>
        {process.env.NEXT_PUBLIC_GITHUB_ACTIONS == false && <><link rel="icon" href={base + "/images/favicon.ico"} sizes="32x32"></link>
        <link rel="icon" href={base + "/images/favicon.ico"} sizes="192x192"></link>
        <link rel="apple-touch-icon" href={base + "/images/favicon.ico" }></link></>}
      </Head>
      <CssBaseline />
      <ThemeProvider>
        <Header props={pageProps} />
        <main className='container'>

          <Component {...pageProps} />

        </main>
      </ThemeProvider>
      <BackToTop />
      <Footer />
    </>
  )
}

export default MyApp
