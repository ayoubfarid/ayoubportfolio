// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "swiper/swiper.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}