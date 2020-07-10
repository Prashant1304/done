import React,{Component} from "react"

class Fourth extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>Mercedes-Benz AMG GT</h1>
          <p>Mercedes has launched a mid-life update to the AMG GT R at a price tag of Rs 2.48 crore (ex-showroom, India). It is Rs 15 lakh more than its predecessor. It remains mechanically unchanged, using a 4.0-litre V8 making 585PS of power and 700Nm of torque, paired with a dual-clutch 7-speed auto transmission.</p>
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
            <img src="https://media.zigcdn.com/media/model/2020/May/gt-2020_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2020/May/front-1-4-left-1406441886_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2020/May/side-view-1364459260_930x620.jpg" ></img>
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

export default Fourth