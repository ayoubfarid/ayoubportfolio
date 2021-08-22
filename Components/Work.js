import Image from "next/image";
import Slider from "react-slick";
import Gitproject from "./work/Gitproject";
import Uiproject from "./work/Uiproject";

const Work = () => {
  return (
    <div className="container">
      <div className="row section-3 mt-5">
        <div data-aos="fade-up" id="work" className="head mt-5">
          <h2>Work</h2>
          <p>
            here you find some project that I done before such as User
            interfaces for mobile/landing pages and some open source project
          </p>
        </div>
        <div  className="container">
          <Uiproject />
          <div className="mt-5">

          </div>
          <Gitproject />
        </div>
      </div>

      <style jsx>
        {`
          .section-3 .container {
            margin-top: 20px;
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
