import "./Header.css";
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
  <div className="header-container">
    <div className="page-container">
      <img src={logo} alt="logo" />
    </div>
  </div>)
}

export default Header;