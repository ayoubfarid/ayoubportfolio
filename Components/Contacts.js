import Image from "next/image";
const Contacts = () => {

  const sendRequest = event => {
  console.log(event.target.email.value+" "+event.target.description.value+" "+event.target.object.value)
    location.href = "mailto:ayoubfarid80@gmail.com"+'?cc='+event.target.email.value+'&subject='+event.target.object.value+'&body='+event.target.description.value;
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    
  }
  return (
    <div className="container  ">
      <div className="row section-4 mt-4 ">
        <div data-aos="fade-up" id="contact" className="head mt-5">
          <h2  className="mb-4"> Contact </h2>
        </div>

        <div data-aos="fade-up" className="container mt-4">
          <div className="row d-flex justify-content-between">
            <div className="col-md-5 contact d-flex align-items-start justify-content-center">
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

            <div className="col-md-5 col-lg-5 justify-content-center">
              <form  onSubmit={sendRequest}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputText2"> Object</label>
                  <input
                  name="object"
                    type="text"
                    className="form-control"
                    id="exampleInputText2"
                    aria-describedby="TextHelp"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Description</label>
                  <textarea
                   name="description"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="mt-2 btn btn-block btn-outline-warning">
                  Leave a Request
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
