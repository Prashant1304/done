import React,{Component} from "react"

class Eleven extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>Rolls Royce Phantom</h1>
          <p>The Rolls-Royce Phantom VIII is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of the Rolls-Royce Phantom, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths.</p>
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
            <img src="https://media.zigcdn.com/media/model/2020/Jun/phantom-1_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2020/Apr/side-view-1030955839_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2020/Apr/front-206718188_930x620.jpg" ></img>
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