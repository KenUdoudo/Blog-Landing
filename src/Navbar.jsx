import menuButton from "./assets/menu icon svg.png";

const Navbar = () => {
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