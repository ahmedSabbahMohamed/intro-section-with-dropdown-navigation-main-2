import Logo from "./Logo"
import { company, features } from "../data/navigationLinks"

function Header() {
    return (
      <header className="pt-3 pb-5">
        <nav class="navbar navbar-expand-lg navbar-white">
          <div class="container">
            <Logo />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </a>
                  <ul
                    class="dropdown-menu border-0 shadow-lg rounded p-2"
                    aria-labelledby="navbarDropdown"
                  >
                    {features.map((ele) => (
                      <li key={ele.id} className="dropdown-item">
                        <img
                          className="d-inline-block pe-2"
                          src={ele.src}
                          alt={ele.text}
                        />
                        <a
                          class="d-inline-block text-decoration-none text-secondary"
                          href="#"
                        >
                          {ele.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <ul
                    class="dropdown-menu border-0 shadow-lg rounded"
                    aria-labelledby="navbarDropdown"
                  >
                    {company.map((ele) => (
                      <li key={ele.id}>
                        <a class="dropdown-item text-secondary" href="#">
                          {ele.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <div className="sign">
                <a
                  className="d-inline-block text-secondary text-decoration-none me-2"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="d-inline-block btn btn-outline-dark text-decoration-none ms-2"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header