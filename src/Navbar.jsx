import menuButton from "./assets/menu icon svg.png";

const Navbar = () => {

  const navBar = document.querySelector(".navul");

  const navClick = () => {
    navBar.classList.toggle("active");
  }

  return (
    <div className="navbar">
      <img src={menuButton} onClick={navClick} />
      <div className="nav">
        <ul className="navul active">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;