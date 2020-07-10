import React,{Component} from "react"

class Ten extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>Mercedes-Benz CLS</h1>
          <p>Mercedes-Benz has launched the third-generation CLS 4-door coupe in India. The CLS 300 d is priced at Rs 84.7 lakh, ex-showroom India.</p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/mercedes-benz-cls_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Nov/side-view-1991835515_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Nov/rear-3-4-left-1987307605_930x620.jpg" ></img>
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

export default Ten