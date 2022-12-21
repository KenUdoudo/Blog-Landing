import blogImage from './assets/blog post image.png'

const SecondSection = () => {
  return (
    <div className="second-head">
      <h1 className='sechead' >Recent Blogs</h1>

      <div className="blogflex">
        <div className="Blog Blog1">
          <img src={ blogImage }/>
          <div className="Blog1text">
            <p>Productivity</p>
            <h1>The Daily Productivity Planner</h1>
            <p>I have some big news! I've created a daily planner that will help you be more mindful and intentional throughout your day</p>
            <a href="#"><button>Read</button></a>
          </div>
        </div>

        <hr />

        <div className="Blog Blog2">
          <img src={ blogImage }/>
          <div className="Blog1text">
            <p>Productivity</p>
            <h1>The Daily Productivity Planner</h1>
            <p>I have some big news! I've created a daily planner that will help you be more mindful and intentional throughout your day</p>
            <a href="#"><button>Read</button></a>
          </div>
        </div>

        <hr />

        <div className="Blog Blog3">
          <img src={ blogImage }/>
          <div className="Blog1text">
            <p>Productivity</p>
            <h1>The Daily Productivity Planner</h1>
            <p>I have some big news! I've created a daily planner that will help you be more mindful and intentional throughout your day</p>
            <a href="#"><button>Read</button></a>
          </div>
        </div>
      </div>
      
      <hr />
    </div>
  );
}
 
export default SecondSection;