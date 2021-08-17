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
            ria-label="Menu"
            data-toggle="collapse"
            data-target="#collapsingNavbarSm"
          >
            <span className="bi bi-list"></span>
          </button>
          <div
            className="navbar-collapse collapse flex-grow-1 text-right"
            id="collapsingNavbarSm"
          >
            <ul className="navbar-nav ms-auto flex-nowrap align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <button
                    type="button"
                    href="#contact"
                    className="btn   btn-warning "
                  >
                    {" "}
                    Hire me
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-item {
          padding: 15px 15px;
        }
        * {
          font-family: Poppins;
          scroll-behavior: smooth;
        }
        .container {
          margin-top: 0px;
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
