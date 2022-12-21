import menuButton from "./assets/menu icon svg.png";

const Navbar = () => {
  const navBar = document.querySelector(".nav ul");

  menuClick(){
    navBar.classList.toggle("active");
  }

  return (
    <div className="navbar">
      <img src={ menuButton } />
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