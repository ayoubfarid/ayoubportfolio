// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "swiper/swiper.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return <Component {...pageProps} />
}