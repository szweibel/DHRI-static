import Header from '../components/Header'
import '../styles/globals.css'
import '../node_modules/highlight.js/styles/obsidian.css'
  

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>

    </>
  )
}

export default MyApp
