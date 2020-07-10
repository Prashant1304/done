import React,{Component} from "react"

class Nine extends Component {

state= {
   
    }

   
    
  render() {
    return(
      <div>
          <h1>BMW 6 Series</h1>
          <p>BMW is set to give the 6 Series Gran Turismo a mid-cycle refresh internationally, with a partially-camouflaged prototype of the midsize luxury four-door coupe being spotted for the first time in southern Europe.

The spy images reveal that the 6 Series GT facelift will get minor cosmetic changes like a revised headlight design, revised DRLs, a larger kidney grille and reshaped exhaust tips. While the interior of the 6 Series GT facelift were not spotted, it is speculated to share some bits with the upcoming 5 Series sedan facelift like an updated all-digital instrument cluster and iDrive infotainment system.</p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/bmw_6_series_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Nov/front-1-4-left-1041222558_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Nov/side-view-203402550_930x620.jpg" ></img>
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

export default Nine