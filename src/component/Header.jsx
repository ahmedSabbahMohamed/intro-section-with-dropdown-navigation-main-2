import logo from "../assets/images/logo.svg"
import toDo from "../assets/images/icon-todo.svg"
import calender from "../assets/images/icon-calendar.svg"
import reminder from "../assets/images/icon-reminders.svg"
import plan from "../assets/images/icon-planning.svg"

function Header() {
    return(
        <header className="mb-3">
            <nav class="navbar navbar-expand-lg navbar-white bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Features
                            </a>
                            <ul class="dropdown-menu border-0 shadow-lg rounded p-2" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                    <img className="d-inline-block pe-2" src={toDo} alt="todo" />
                                    <a class="d-inline-block text-decoration-none text-secondary" href="#">Todo List</a>
                                </li>
                                <li className="dropdown-item">
                                    <img className="d-inline-block pe-2" src={calender} alt="calender" />
                                    <a class="d-inline-block text-decoration-none text-secondary" href="#">Calendar</a>
                                </li>
                                <li className="dropdown-item">
                                    <img className="d-inline-block pe-2" src={reminder} alt="reminder" />    
                                    <a class="d-inline-block text-decoration-none text-secondary" href="#">Reminders</a>
                                </li>
                                <li className="dropdown-item">
                                    <img className="d-inline-block pe-2" src={plan} alt="planning" />
                                    <a class="d-inline-block text-decoration-none text-secondary" href="#">Planning</a>
                                </li>
                            </ul>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul class="dropdown-menu border-0 shadow-lg rounded" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item text-secondary" href="#">History</a></li>
                                <li><a class="dropdown-item text-secondary" href="#">Our Team</a></li>
                                <li><a class="dropdown-item text-secondary" href="#">Blog</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Careers</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <div className="sign">
                            <a className="d-inline-block text-secondary text-decoration-none me-2" href="#">Login</a>
                            <a className="d-inline-block btn btn-outline-dark text-decoration-none ms-2" href="#">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header