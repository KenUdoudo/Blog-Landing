import menuButton from "./assets/menu icon svg.png";
import { useState } from "react";
import Facebook from './assets/surface1fb.png'
import Twitter from './assets/surface1tweet.svg'
import Indeed from './assets/surface1indeed.png'
import d from './assets/surface1d.png'
const Navbar = () => {

  
  const [open, setOpen] = useState(false);
  

  return (
    <div className="navbar">
      <img src={menuButton} onClick={()=>{setOpen(!open)}} id="menubtn"  />
      <div className="nav">
        <ul className={`navul ${open? 'active' : 'inactive'}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navlinks">
        <a href="#"><img src={ Facebook }/></a>
          <a href="#"><img src={ Twitter }/></a>
          <a href="#"><img src= { Indeed } /></a>
          <a href="#"><img src= { d } /></a>
      </div>
    </div>
  );
}

export default Navbar;