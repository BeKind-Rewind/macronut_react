import './App.css'

function App() {

  return (
    <>
      <nav className="flex">
        <div>
          <span>July 1 2024</span>
        </div>
        <div >
          <ul>
            <img src="" alt="avatar"></img>
            <li>Signin</li>
            <li>Signup</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>
      
      <h1>MACRONUT</h1>
      
      <h2>Fuel the Engine</h2>

      <section>
        <h1>Goals</h1>
        <ul>
          <li><h2>Calories</h2></li>
          <li><h2>Macros</h2></li>
          <li><h2>Percentage</h2></li>
        </ul>
        <button><h3>Add Goal</h3></button>
      </section>
      <section>
        <ul>
          <li>
            <h3>Breakfast</h3>
            <button>ADD</button>
          </li>
          <li>
            <h3>Lunch</h3>
            <button>ADD</button>
          </li>
          <li>
            <h3>Dinner</h3>
            <button>ADD</button>
          </li>
          <li>
            <h3>Extra Fuel</h3>
            <button>ADD</button>
          </li>
        </ul>
      </section>
    </>
  )
}

export default App
