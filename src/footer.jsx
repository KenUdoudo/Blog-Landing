import './footer.css'
import Facebook from './assets/surface1fb.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <h1>Newsletter</h1>
        <form>
          <input type="text" placeholder='FIRST NAME' id="first-input" required/>
          <input type="email" placeholder='EMAIL' id="second-input" required/>
          <button type="submit" id='submitbtn'>Go</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p className="copyright">Copyright 2022-SelfCare.blog</p>
        <div className="links">
          <a href="#"><img src=""/></a>
          <a href="#"><img src=""/></a>
          <a href="#"><img src=""/></a>
          <a href="#"><img src=""/></a>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;