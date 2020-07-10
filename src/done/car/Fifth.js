import React,{Component} from "react"

class Fifth extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>Rolls Royce Ghost</h1>
          <p>Timeless in concept yet utterly modern in execution, Ghost is Rolls-Royce at its most graceful and dramatic. The distinctive design ethos draws on the simple perfection of nature’s golden ratio. These classic 2:1 proportions have become unmistakably Rolls-Royce. The sculptural shape of the headlights. The unique wheels. These angles and curves radiate contemporary confidence and exceed poise from every perspective.</p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/rolls-royce-ghost_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Oct/front-1-4-left-1424475234_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Oct/rear-back-1304508046_930x620.jpg" ></img>
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

export default Fifth