const Navbar = () => {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-md navbar-white bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <h1 className="logo-title">ayoubfarid</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbarSm"
          >
            <span className="bi bi-list"></span>
          </button>
          <div className="navbar-collapse collapse flex-grow-1 text-right" id="collapsingNavbarSm">
            <ul className="navbar-nav ms-auto flex-nowrap align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
               Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
               Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
               Contact
                </a>
              </li>
              <li className="nav-item">
              <button  type="button" className="btn   btn-warning ">
                  {" "}
                  Hire me
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <style jsx>{`
        .nav-item{
          padding: 15px 15px;
        }
        * {
          font-family: Poppins;
        }
        .container {
          margin-top: 25px;
        }
        .logo-title {
          padding: 15px 0px;
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
