import blogImage from './assets/blog post image.png'

const SecondSection = () => {
  return (
    <div className="second-head">
      <h1>Recent Blogs</h1>
      
      <div className="Blog1">
        <img src={ blogImage }/>
        <div className="Blog1text">
          <p>Productivity</p>
          <h1>The Daily Productivity Planner</h1>
          <p>I have some big news! I've created a daily planner that will help you be more mindful and intentional throughout your day</p>
          <button><a href="#">Read</a></button>
        </div>
      </div>
    </div>
  );
}
 
export default SecondSection;