import Image from "next/image";
const Resume = () => {
  var experinces = [
    {
      id: "1",
      company: "Shipinfy",
      role: "Ui/Ux Designer & Front End Dev",
      period: "Apr 2021 - present",
      postDesc:
        "Contribute in developping shipinfy app by Designe diffrent Ui for the app from ui to code",
      indicatorImg: "/experiences/indicator.svg",
      stack: {
        image: "",
      },
    },
    {
      id: "2",
      company: "Hight School of technologie Essaouira",
      role: "Fullstack Web-developer",
      period: "Apr 2020 - Jun 2020",
      postDesc: "Developpe an e-commerce web app using Laravel /vue ",
      indicatorImg: "/experiences/indicatorDisabled.svg",
      stack: {
        image: "",
      },
    },
  ];
  var educations = [
    {
      id: "1",
      school: "Faculty of science and technologie Gueliz",
      level: "Bachlor's degree at computer science",
      period: "2020 - 2021",
      indicatorImg: "/experiences/indicator.svg",
      postDesc: "Learn Advanced programming language and Networking:Routing and protocols  , -Web stack :Angular/Spring , -Java IHM, ",
    },
    {
      id: "2",
      school: "Hight School of technologie Essaouira",
      level: " Computer science student",
      period: "2018 - 2020",
      indicatorImg: "/experiences/indicatorDisabled.svg",
      postDesc: "Learn programming language fundamentals such as Algorithm, C ,C++, Java . -Web developpement:PHP,HTML,XML,JQUERY,CSS,SQL -Project Management:UML,Merise",
    },
  ];
  return (
    <div className="container section-4">
      <div className="row ">
        <div className="head">
          <h2>Work</h2>
        </div>
      </div>
      <div className="row  ">
        <div className="col mx-auto">
          <h3>Experiences</h3>
          {experinces.map((experience, index) => (
            <div key={experience.id} className=" d-flex p-4 align-items-center">
              <Image src={experience.indicatorImg} width={55} height={262} />
              <div className="card-exp p-4  align-items-start">
                <p className="sup-headline ">{experience.company}</p>
                <h3 className="headline">{experience.role}</h3>
                <p className="sub-headline">{experience.period}</p>
                <p className="body-desc">{experience.postDesc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col">
          <h3>Education</h3>
          {educations.map((education, index) => (
            <div key={education.id} className=" d-flex p-4 align-items-center">
              <Image src={education.indicatorImg} width={55} height={262} />
              <div className="card-exp p-4  align-items-start">
                <p className="sup-headline ">{education.school}</p>
                <h3 className="headline">{education.level}</h3>
                <p className="sub-headline">{education.period}</p>
                <p className="body-desc">{education.postDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
        .card-exp .body-desc{
          font-weight: 500;
          font-size: 12px;
          line-height: 22px;
          letter-spacing: -0.03em;
          word-break: break-all;
          color: rgba(0, 0, 0, 0.75);

        }
        .card-exp .sub-headline{
          font-weight: 500;
          font-size: 12px;
          
          letter-spacing: -0.03em;

          color: rgba(0, 0, 0, 0.5);
        }
        .card-exp .headline{
          font-weight: 500;
          text-align:left;
          line-height: 30px;
          letter-spacing: -0.03em;

          color: #000000;
        }
        .card-exp .sup-headline{
          font-size: 14px;
          
          letter-spacing: -0.03em;

          color: #FFCD00;
        }
        .section-4 .card-exp{
          text-align:left;
          width: 401px;
          height: 227px;
          background: #FFFFFF;
          box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
          border-radius: 26px;
          margin-left:25px;
          
        }
        .section-4 .card-exp::before {
          content: "";
          
          }
        .section-4 h3{
          font-size: 24px;
          text-align: center;
        }
        .section-4{
            margin-top: 100px;
        }
        .section-4 .head {
            margin: auto;
            justify-content: center;
            width: 885px;
          }
          .section-4 .head h2 {
            font-weight: bold;
            font-size: 48px;
            text-align: center;
          }
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
