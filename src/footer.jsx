import './footer.css'

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
    </div>
  );
}
 
export default Footer;