import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import "../assets/styles/header.scss";
import IconBtn from "./IconBtn";
import Logo from "./Logo";
import Stars from "./Stars";
import Nav from "./Nav";

const Header = () => {
  const navItems = [
    { label: "últimas", url: "/" },
    { label: "opinião", url: "/opiniao" },
    { label: "política", url: "/politica" },
    { label: "economia", url: "/economia" },
    { label: "mundo", url: "/mundo" },
    { label: "cotidiano", url: "/cotidiano" },
    { label: "esporte", url: "/esporte" },
    { label: "cultura", url: "/cultura" },
    { label: "f5", url: "/f5" },
    { label: "podcasts", url: "/podcasts" },
  ];

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
            <a href="#" aria-label="Logo: Folha de São Paulo">
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
      <Nav navItems={navItems}/>
    </header>
  );
}

export default Header;
