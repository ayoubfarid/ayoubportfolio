import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Work = () => {
  var projects = [
    {
      id: "1",
      title: "SellHomme",
      image: "/dribbble/selhome.png",
      categorie: "Landing Page",
      chipCategorie: "Ui design",
      textDesc: "To see the full project in dribbble click the button below...",
      btnText: "View full Project",
      link: "https://dribbble.com/shots/15008207-SellHome-Landing-Page",
    },
    {
      id: "2",
      title: "Portfolio 2021 v2",
      image: "/dribbble/portfolio.png",
      categorie: "Landing Page",
      chipCategorie: "Ui design",
      textDesc: "To see the full project in dribbble click the button below...",
      btnText: "View full Project",
      link: "https://dribbble.com/shots/15924716-Portfolio-2021",
    },
    {
      id: "3",
      title: "Co-team",
      image: "/dribbble/coteam.png",
      categorie: "Landing Page",
      chipCategorie: "Ui design",
      textDesc: "To see the full project in dribbble click the button below...",
      btnText: "View full Project",
      link: "https://dribbble.com/shots/14753416-Landing-Page-for-Co-team",
    },
    {
      id: "4",
      title: "Recipes App",
      image: "/dribbble/recipes.png",
      categorie: "Landing Page",
      chipCategorie: "Ui design",
      textDesc: "To see the full project in dribbble click the button below...",
      btnText: "View full Project",
      link: "https://dribbble.com/shots/14603809-UI-Recipes-App",
    },
    {
      id: "5",
      title: "Portfolio 2021 v1",
      image: "/dribbble/portfoliov1.png",
      categorie: "Landing Page",
      chipCategorie: "Ui design",
      textDesc: "To see the full project in dribbble click the button below...",
      btnText: "View full Project",
      link: "https://dribbble.com/shots/14597918-UI-Design-for-portfolio-2021",
    },
    {
      id: "6",
      title: "Luxury Wach",
      image: "/dribbble/watchesluxury.png",
      categorie: "Landing Page",
      chipCategorie: "Ui design",
      textDesc: "To see the full project in dribbble click the button below...",
      btnText: "View full Project",
      link: "https://dribbble.com/shots/14717641-User-Interface-for-a-Luxury-watchs",
    },
  ];
  return (
    <div className="container">
      <div className="row section-3 mt-5">
        <div id="work" className="head mt-5">
          <h2>Work</h2>
          <p>
            here you find some project that I done before such us User
            interfaces for mobile and landing pages
          </p>
        </div>
        <div className="container">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              360: {
                width: 360,
                slidesPerView: 1,
                spaceBetween: 450,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 1,
                spaceBetween: 200,
              },
            }}
            id="main"
            spaceBetween={100}
            slidesPerView={1.75}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div className="card-work">
                  <Image
                    className="proj-image"
                    src={project.image}
                    alt="Welcoming emojie"
                    width={721}
                    height={541}
                    layout="responsive"
                  />
                  <div className="card-work-cat">{project.categorie}</div>
                  <div className="card-work-desc">
                    <div className="chip-cat">{project.chipCategorie}</div>
                    <div className="card-work-headline">{project.title}</div>
                    <div className="card-work-body">{project.textDesc}</div>
                    <div className="card-work-btn">
                      <a
                        type="button"
                        target="_blank"
                        rel="noreferrer"
                        href={project.link}
                        className="  btn btn-lg btn-outline-warning"
                      >
                        {project.btnText}{" "}
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>
        {`
          .swiper-container {
            width: 755px;
          }

          @media (min-width: 310px) and (max-width: 450px) {
            .swiper-container {
              width: 451px;
            }
            .card-work {
              width: 451.17px;
              height: 423.08px;
            }
            .proj-image {
              width: 100%;
            }
          }

          @media (min-width: 768px) and (max-width: 960px) {
            .swiper-container {
              width: 755px;
            }
            .proj-image {
              width: 755px;
            }
            .card-work {
              width: 451.17px;
              height: 423.08px;
            }
          }
          .section-3 .container {
            margin-top: 20px;
          }
          .card-work-btn i {
            padding-left: 20px;
          }
          .card-work-btn .btn {
            text-align: center;
            margin-top: 20px;
            width: 100%;
          }
          .card-work-body {
            font-weight: normal;
            font-size: 18px;
            line-height: 27px;

            letter-spacing: -0.03em;

            color: rgba(0, 0, 0, 0.5);
          }
          .card-work-headline {
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 72px;
            /* identical to box height */

            letter-spacing: -0.03em;

            color: #000000;
          }
          .chip-cat {
            width: 97px;
            padding: 5px 20px;
            font-size: 14px;
            line-height: 21px;
            text-align: center;
            letter-spacing: -0.03em;

            color: #ffcd00;
            background: rgba(255, 233, 165, 0.45);
            //box-shadow: 0px 2px 21px rgba(146, 146, 146, 0.25);
            border-radius: 10px;
          }
          .card-work-cat {
            padding: 5px 20px;
            width: 175px;

            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            background: #ffcd00;
            border-radius: 5px;
            right: -70%;
            top: -60%;
            position: relative;
            color: #ffffff;
          }
          .card-work-desc {
            position: relative;
            top: -10%;
            z-index: 4;
            width: 100%;
          }
          SwiperSlide {
            padding-top: 20px;
            margin-top: 20px;
          }
          .card-work {
            width: 755px;
           min-width: 450px;
            height: 708px;
            margin: 0px 10px;
            padding: 0px 50px;
            background: #ffffff;

            border-radius: 26px;
          }
          .section-3 {
            margin-top: 100px;
          }
          .section-3 .head {
            margin: auto;
            justify-content: center;
            width: 885px;
          }
          .section-3 .head h2 {
            font-weight: bold;
            font-size: 48px;
            text-align: center;
          }
          .section-3 .head p {
            font-weight: normal;
            font-size: 18px;
            line-height: 150%;
            /* or 27px */

            text-align: center;
            letter-spacing: -0.03em;

            color: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Work;
