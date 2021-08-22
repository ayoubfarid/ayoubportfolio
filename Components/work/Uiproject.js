import Image from "next/image";
import Slider from "react-slick";
const Uiproject = () => {
  var projects = [
    {
      id: "1",
      title: "SellHome",
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
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0.75,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };
  return (
    <div data-aos="fade-up" className="container">
      <h3>UI/UX project</h3>
      <div className="row mt-5">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={project.id}>
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
                  <div className="card-work-btn ">
                    <a
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      href={project.link}
                      className="  btn btn-lg btn-outline-warning"
                    >
                      {project.btnText} <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>
        {`
          h3 {
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 36px;
            text-align: center;
            letter-spacing: -0.03em;

            color:#000000
          }

          .card-work-btn i {
            padding-left: 20px;
          }
          .card-work-btn .btn {
            text-align: center;

            width: 100%;
          }
          .card-work-body {
            font-weight: normal;
            font-size: 16px;
            line-height: 27px;
            margin-bottom: 10px;
            letter-spacing: -0.03em;

            color: rgba(0, 0, 0, 0.5);
          }
          .card-work-headline {
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 72px;
            /* identical to box height */

            letter-spacing: -0.03em;

            color: #000000;
          }
          .chip-cat {
            width: 80px;
            padding: 5px 15px;
            font-size: 12px;
            line-height: 21px;
            text-align: center;
            letter-spacing: -0.03em;

            color: #ffcd00;
            background: rgba(255, 233, 165, 0.45);
            //box-shadow: 0px 2px 21px rgba(146, 146, 146, 0.25);
            border-radius: 10px;
          }
          .card-work-cat {
            padding: 5px 10px;
            width: 110px;

            font-style: normal;
            font-weight: 600;
            font-size: 14px;
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
            width: 451.17px;
            height: 423.08px;
            margin: 0px 5px;
            padding: 0px 25px;
            background: #ffffff;

            border-radius: 26px;
          }
        `}
      </style>
    </div>
  );
};

export default Uiproject;
