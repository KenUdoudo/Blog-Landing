import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <h1>Newsletter</h1>
        <form>
          <input type="text" placeholder='FIRST NAME' required/>
          <input type="email" placeholder='EMAIL' required/>
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
}
 
export default Footer;