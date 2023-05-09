import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import "../assets/styles/header.scss";
import IconBtn from "./IconBtn";
import Logo from "./Logo";
import Stars from "./Stars";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-content">
          <div className="header-actions actions-left">
            <IconBtn
              onClick={() => console.log("ok")}
              value="Menu"
              icon={<FaBars />}
            />
            <IconBtn
              onClick={() => console.log("ok")}
              value="Assine"
              customClass="text-color-red"
            />
          </div>
          <div className="header-logo">
            <a href="#">
              <Logo />
            </a>
            <div className="sub-header">
              <span>DESDE 1921</span>
              <Stars />
              <span>UM JORNAL A SERVIÇO DO BRASIL
              </span>
            </div>
          </div>
          <div className="header-actions actions-right">
            <IconBtn
              onClick={() => console.log("ok")}
              value="Entrar"
              icon={<FaUser />}
            />
            <IconBtn
              onClick={() => console.log("ok")}
              value="Buscar"
              icon={<FaSearch />}
            />
          </div>
        </div>
      </div>
      <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="/">Home</a>
            </li>
            <li className="header-nav-item">
              <a href="/politics">Politics</a>
            </li>
            <li className="header-nav-item">
              <a href="/business">Business</a>
            </li>
            <li className="header-nav-item">
              <a href="/sports">Sports</a>
            </li>
            <li className="header-nav-item">
              <a href="/culture">Culture</a>
            </li>
          </ul>
        </nav>

      {/* <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="/">Home</a>
            </li>
            <li className="header-nav-item">
              <a href="/politics">Politics</a>
            </li>
            <li className="header-nav-item">
              <a href="/business">Business</a>
            </li>
            <li className="header-nav-item">
              <a href="/sports">Sports</a>
            </li>
            <li className="header-nav-item">
              <a href="/culture">Culture</a>
            </li>
          </ul>
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Search" />
          <button>Go</button>
        </div> */}
    </header>
  );
}

export default Header;
