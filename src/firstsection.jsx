import backDrop from './assets/hero bgbackdrop.png';

const FirstSection = () => {
  return (
    <div className="backdrop">
      <img src={ backDrop } />
      <div className="backdrop-text">
        <h1>Hi, Welcome to SelfCare</h1>
        <p>"SELF-CARE" IS A TRENDY PHASE THESE DAYS, BUT WHAT EXACTLY DOES IT MEAN? LOOK ON SOCIAL MEDIA OR IN A MAGAZINE, AND IT INDULGE IN LUXURY OR TO TREAT YOURSELF IN SOME WAY. BUT THERE'S MUCH MORE TO IT THAN THAT.</p>
      </div>
    </div>
  );
}
 
export default FirstSection;