import menuButton from "./assets/menu icon svg.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ menuButton } />
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;