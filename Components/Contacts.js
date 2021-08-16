import Image from "next/image";
const Contacts = () => {
  return (
    <div className="container mt-4 ">
      <div className="row section-4 p-4">
        <div className="head">
          <h2  className="mb-4"> Contact </h2>
        </div>

        <div className="container mt-4">
          <div className="row ">
            <div className="col contact d-flex align-items-start">
              <div className="contact-desc">
                <h2 className="head">I’m excited</h2>
                <p className="text-desc">
                  to work on your next project <br /> leave a request
                </p>
              </div>

              <Image
                src="/Icons/chat.svg"
                alt="Welcoming emojie"
                width={80}
                height={80}
              />
            </div>

            <div className="col ">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputText2"> Object</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText2"
                    aria-describedby="TextHelp"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Description</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="mt-2 btn btn-block btn-outline-warning">
                  Leave Request
                </button>
               </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        button{
            width:100%
        }
        .contact-desc{
          min-width:350px;
        }
          .contact-desc .text-desc {
            font-weight: normal;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: -0.03em;

            color: rgba(0, 0, 0, 0.5);
          }
          .contact-desc .head {
            padding-right: 10px;
            font-style: normal;
            font-weight: 600;
            font-size: 64px;

           
            letter-spacing: -0.03em;

            color: rgba(0, 0, 0, 0.5);
          }

          .section-4 {
            padding-top: 100px;
          }
          .head h2 {
            font-weight: bold;
            font-size: 48px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Contacts;
