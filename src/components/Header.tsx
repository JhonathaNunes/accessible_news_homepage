import "../assets/styles/header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <a href="/" className="header-logo">
          Folha de São Paulo
        </a>
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
        <div className="header-search">
          <input type="text" placeholder="Search" />
          <button>Go</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
