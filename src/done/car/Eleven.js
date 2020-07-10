import React,{Component} from "react"

class Eleven extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>Porsche Panamera</h1>
          <p>Porsche is set to give the Panamera a mid-life facelift, as evidenced by a prototype spotted testing on public roads.

Exterior changes are minor, including a revised front bumper, updated DRLs, simpler tail lights, new diffuser and updated exhaust tips. The interiors of the Panamera facelift are expected to get a minor update along with additional features.</p>
          <div>
              <p>Select from available colours</p>
              <button>red</button>
              <button>green</button>
              <button>yellow</button>
              <button>black</button>
              <button>brown</button>
              <button>violet</button>
              <button>marune</button>
              <button>pink</button>
          </div>
          <div>
            <img src="https://media.zigcdn.com/media/model/2020/Jan/porsche-panamera_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2020/Jan/207_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2020/Jan/side-view-81196877_930x620.jpg" ></img>
          </div>
          <div>
              <p>Vehicle Stats</p>
              <p>Top Speed</p>
              <p>Acceleration</p>
              <p>Braking</p>
              <p>Traction</p>
          </div>
          <button>ORDER</button>
      </div>
      )
    }
}

export default Eleven