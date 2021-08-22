import Slider from "react-slick";

const Gitproject = () => {
  let projects = [
    {
      id: 1,
      link: "https://github.com/ayoubfarid/ayoubportfolio",
      image:
        "https://gh-card.dev/repos/ayoubfarid/ayoubportfolio.svg?fullname=",
    },
    {
      id: 2,
      link: "https://github.com/ayoubfarid/JavafxMlProject",
      image:
        "https://gh-card.dev/repos/ayoubfarid/JavafxMlProject.svg?fullname=",
    },
    {
      id: 3,
      link: "https://github.com/ayoubfarid/MlLogisticRegression",
      image:
        "https://gh-card.dev/repos/ayoubfarid/MlLogisticRegression.svg?fullname=",
    },
    {
      id: 4,
      link: "https://github.com/ayoubfarid/GestionCommandePaiement",
      image:
        "https://gh-card.dev/repos/ayoubfarid/GestionCommandePaiement.svg?fullname=",
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
    <div data-aos="fade-up"  className="container mt-5">
      <h3>Open Source project</h3>
      <div className="row mt-5">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <a href={project.link}>
                <img src={project.image} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 36px;
          text-align: center;
          letter-spacing: -0.03em;

          color: #000000;
        }
      `}</style>
    </div>
  );
};

export default Gitproject;
