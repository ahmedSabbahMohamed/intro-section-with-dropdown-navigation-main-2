import logo from "../assets/images/logo.svg";

function Logo() {
  return (
    <a class="navbar-brand" href="/">
      <img src={logo} alt="logo" />
    </a>
  );
}

export default Logo;
