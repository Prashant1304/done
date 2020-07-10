import React,{Component} from "react"

class Seven extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>Mercedes-Benz S-Class</h1>
          <p>More spy footage of Mercedes’s upcoming S-Class being tested in a camo wrap on the streets of Europe has surfaced online. The S-Class is still heavily camouflaged like in earlier spy shots, but a key highlight of the new S-Class images is the pop-up door handles, which too were completely covered this time around.</p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/mercedes-benz-s-class_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Oct/front-1-4-left-1132450672_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Oct/side-view-2069876068_930x620.jpg" ></img>
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

export default Seven