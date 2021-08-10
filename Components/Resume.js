import Image from "next/image";
const Resume = () => {
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
          <div className=" d-flex p-4 align-items-center">
            <Image src="/experiences/indicator.svg" width={55} height={262} />
            <div className="card p-4  align-items-start">
             
                <p className="sup-headline ">Shipinfy</p>
                <h3 className="headline">Ui/Ux Designer & Front End Dev</h3>
                <p className="sub-headline">Apr 2021 - present</p>
                <p className="body-desc">
                  Contribute in developping shipinfy app <br/>-by Designe diffrent Ui
                  for the app from ui to code
                
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <h3>Education</h3>
        </div>
      </div>
      <style jsx>
        {`
        .card .body-desc{
          font-weight: 500;
          font-size: 12px;
          
          letter-spacing: -0.03em;

          color: rgba(0, 0, 0, 0.75);

        }
        .card .sub-headline{
          font-weight: 500;
          font-size: 12px;
          
          letter-spacing: -0.03em;

          color: rgba(0, 0, 0, 0.5);
        }
        .card .headline{
          font-weight: 500;
          
          line-height: 30px;
          letter-spacing: -0.03em;

          color: #000000;
        }
        .card .sup-headline{
          font-size: 14px;
          
          letter-spacing: -0.03em;

          color: #FFCD00;
        }
        .section-4 .card{
          width: 401px;
          height: 227px;
          background: #FFFFFF;
          box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
          border-radius: 26px;
          margin-left:25px;
          
        }
        .section-4 .card::before {
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
