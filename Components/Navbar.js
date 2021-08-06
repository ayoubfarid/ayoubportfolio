

const Navbar = () => {
  return (
    <div className="container px-4">
      <div className="row d-flex justify-content-between">
        <div className="col">
          <h1 className="logo-title">ayoubfarid</h1>
        </div>
        <div className="col">
          <nav>
            <ul>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Work</a>
              </li>
              <li>
                <a>Resume</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                  
                <a>Hire me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
          *{
              font-family:Poppins
          }
        .container {
          margin-top: 50px;
        }
        .logo-title {
          font-size: 18px;
          color: #000000;
          font-weight: 500;
          
        }
        li {
          display: inline;
        }
        a {
          text-decoration: none;
          display: inline;
          padding: 25px;
          font-size: 16px;
          color: black;
        }
        a:hover,
        a:active {
          color: #ffcd00;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
