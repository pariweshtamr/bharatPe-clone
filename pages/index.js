import Head from 'next/Head'
import AllInOne from '../components/AllInOne/AllInOne'
import AppHighlights from '../components/AppHighlights/AppHighlights'
import Banner from '../components/Banner/Banner'
import Business from '../components/Business/Business'
import Carousel from '../components/Carousel/Carousel'
import EasyPayments from '../components/EasyPayments/EasyPayments'
import Signup from '../components/Signup/Signup'
import Videos from '../components/Videos/Videos'

export default function Home() {
  return (
    <>
      <Head>
        <title>BharatPe Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main">
        <Carousel />
        <EasyPayments />
        <AllInOne />
        <AppHighlights />
        <Business />
        <Banner />
        <Videos />
        <Signup />
      </div>
    </>
  )
}
