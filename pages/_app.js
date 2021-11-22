import Header from '../components/Header'
import ButtonAppBar from '../components/ButtonAppBar'
import Drawer from '../components/Drawer'
import '../styles/globals.css'
import '../node_modules/highlight.js/styles/obsidian.css'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
      <title>DHRI Curriculum</title>
    </Head>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      {/* <Header workshops= { pageProps.workshops }/> */}
      <ButtonAppBar workshops={ pageProps.workshops }/>
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
    </>
  )
}

export default MyApp
