import menuButton from "./assets/menu icon svg.png";

const Navbar = () => {
  const hamburger = document.querySelector(".menu")
  const navBar = document.querySelector(".nav ul");

  const navClick = () => {
    navBar.classList.toggle("active");
  }

  return (
    <div className="navbar">
      <img src={ menuButton } className="menu" onClick={ navClick } />
      <div className="nav">
        <ul>
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