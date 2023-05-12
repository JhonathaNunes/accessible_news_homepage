import "../assets/styles/nav.scss";

interface NavItem {
  label: string;
  url: string;
}

interface NavProps {
  navItems: NavItem[];
}

const Nav = ({ navItems }: NavProps) => {
  return (
    <nav className="horizontal-nav-container">
      <ul className="horizontal-nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="horizontal-nav-item">
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;