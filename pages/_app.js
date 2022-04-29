import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout/Layout'
import { useEffect } from 'react'

library.add(fas, fab)

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
