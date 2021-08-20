import Head from "next/head";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import SkillsSection from "../Components/SkillsSection";
import Work from "../Components/Work";
import Resume from "../Components/Resume";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ayoubfarid</title>
        <link rel="icon" href="/avataricon.ico" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.5,initial-scale=1"
        />
        <meta name="description" content="Welcome to Ayoub farid portfolio." />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Navbar />
      <Header />
      <SkillsSection />

      <Work />
      <Resume />
      <Contacts />
      <Footer />
    </div>
  );
}
