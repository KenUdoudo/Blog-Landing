import blogImage from './assets/blog post image.png'

const SecondSection = () => {
  return (
    <div className="second-head">
      <h1>Recent Blogs</h1>
      <div className="Blog1">
        <img src={ blogImage }/>
      </div>
    </div>
  );
}
 
export default SecondSection;