import Header from "./header";
import FirstSection from "./firstsection";
import SecondSection from "./secondsection";
import './content.css'

const Content = () => {

  return (
    <div className="main-content">
      <Header />
      
      <FirstSection />

      <SecondSection />
    </div>
  );
}
 
export default Content;