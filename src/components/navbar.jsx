import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img className="header-logo" src="/src/assets/img/Logo-Gamer.png" />
        <h1 className="header-title">Gamer Corner</h1>
      </div>
      <nav className="nav-section">
        <ul className="nav-elements-ul">
          <li className="list-style-none">
            <a className="nav-elements-li" href="index.html">Home</a>
          </li>
          <li className="list-style-none">
            <a className="nav-elements-li" id="open-modal">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
