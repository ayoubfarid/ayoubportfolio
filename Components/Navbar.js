const Navbar = () => {
  return (
    <div className="container px-4">
      <div className="row d-flex justify-content-between">
        <div className="col">
          <h1 className="logo-title">ayoubfarid</h1>
        </div>
        <div className="col ">
          <nav>
            <ul className="nav justify-content-end align-items-center">
              <li className="nav-item">
                <a>Skills</a>
              </li>
              <li className="nav-item">
                <a>Work</a>
              </li>
              <li className="nav-item">
                <a>Resume</a>
              </li>
              <li className="nav-item">
                <a>Contact</a>
              </li>
              <li className="nav-item">
                <button  type="button" className="btn   btn-warning ">
                  {" "}
                  Hire me
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        * {
          font-family: Poppins;
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
