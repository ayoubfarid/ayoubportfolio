import Head from 'next/head'

import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins"
            rel="stylesheet"
          />
          
          
           </Head>
      
      <Navbar />
      <Header />
      
      
    </div>
  )
}
