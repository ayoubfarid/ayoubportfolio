import Image from "next/image";

const SkillsSection = () => {
  return (
    <div>
      <div className="row section-2 mt-5">
        <div className="head">
          <h2>Skills</h2>
          <p>
            Im sharing with you some framworks and tools that i used on my
            several project as Ui/Ux Designer and Web Developper
          </p>
        </div>
        <div className="cards-skils mt-2 row p-3">
          <div className="col-6 card ">
            <Image
              src="/Icons/skills/devicon.png"
              alt="Welcoming emojie"
              width={167}
              height={167}
            />
            <h2 className="p-2">Web developper</h2>
            <div className="d-flex justify-content-between tools-lang-head">
              <h3 className="p-2">Frameworks</h3>
              <Image
                src="/Icons/skills/arrow.svg"
                alt="Welcoming emojie"
                width={272}
                height={2}
              />
            </div>
            <div className="d-flex align-items-center   tools-lang ">
              <h4 className="mr-auto p-2 col-5 ">Front-end</h4>

              <div className="col-7 p-2 d-flex justify-content-between">
                <Image
                  src="/Icons/skills/logos/logos_angular-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={42}
                />
                <Image
                  src="/Icons/skills/logos/logo-vue-icon.svg"
                  alt="Welcoming emojie"
                  width={46}
                  height={46}
                />
                <Image
                  src="/Icons/skills/logos/logo-ionic-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="d-flex align-items-center   tools-lang ">
              <h4 className="mr-auto p-2 col-5 ">Back-end</h4>

              <div className="col-7 p-2 d-flex justify-content-between">
                <Image
                  src="/Icons/skills/logos/logo-spring-icon.svg"
                  alt="Welcoming emojie"
                  width={140}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/logo-laravel-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="col-6 card mt-2">
            <Image
              src="/Icons/skills/uiuxicon.png"
              alt="Welcoming emojie"
              width={167}
              height={167}
            />
            <h2 className="p-2">Ui/Ux Designer</h2>
            <div className="d-flex justify-content-between tools-lang-head">
              <h3 className="p-2">Tools</h3>
              <Image
                src="/Icons/skills/arrow.svg"
                alt="Welcoming emojie"
                width={272}
                height={2}
              />
            </div>
            <div className="d-flex align-items-center   tools-lang ">
              <h4 className="mr-auto p-2 col-5 ">Software</h4>

              <div className="col-7 p-2 d-flex justify-content-between">
                <Image
                  src="/Icons/skills/logos/logo-ai-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/logo-ps-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/logo-figma-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="d-flex align-items-center   tools-lang ">
              <h4 className="mr-auto p-2 col-5 "></h4>

              <div className="col-7 p-2 d-flex justify-content-between"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tools-lang,
          .tools-lang-head {
            width: 85%;
          }

          .tools-lang h4 {
            font-weight: normal;

            font-size: 18px;
            line-height: 27px;
          }

          .cards-skils {
            justify-content: space-around;
          }
          .cards-skils .card h3 {
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;

            color: rgba(0, 0, 0, 0.5);
          }
          .cards-skils .card h2 {
            font-weight: bold;
            font-size: 36px;
            line-height: 54px;
            text-align: center;
            letter-spacing: -0.03em;
          }
          .cards-skils .card {
            width: 595px;
            height: 558px;
            min-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffffff;
            box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
            border-radius: 26px;
          }
          .section-2 {
            margin-top: 100px;
          }
          .section-2 .head {
            margin: auto;
            justify-content: center;
            width: 885px;
          }
          .section-2 .head h2 {
            font-weight: bold;
            font-size: 48px;
            text-align: center;
          }
          .section-2 .head p {
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

export default SkillsSection;
