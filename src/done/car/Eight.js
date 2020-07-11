import React,{Component} from "react"
var url = [
  {
    id:8,
    url:"eight/8",
    img1:"https://media.zigcdn.com/media/model/2020/Jun/x6-2020_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2020/Jun/front-1-4-left-652386419_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2020/Jun/rear-3-4-left-819172076_930x620.jpg",
    name:"car8",
},
]
class Eight extends Component {

state= {
  data:url,
  bool1:true,
  bool2:false
   }
  handleClick= e =>{
    this.setState({bool1:false,bool2:true})
  }
   
    
  render() {
    return(
      <div>
          {this.state.bool1&&<div>
        <div>
        </div>
          <h1>BMW X6</h1>
          <p>BMW India has finally launched the 2020 X6 coupe-SUV at a price tag of Rs 95 lakh (ex-showroom, India). It is offered in the Msport and Xline variants, both priced at Rs 95 lakh and is a CBU unit.

Design highlights include a massive kidney grille and other styling elements which are in-tune with modern BMWs. Some of them include BMW Laserlight with adaptive LED headlights, aggressive air dams, lip spoiler and the option of 20-inch 21-inch alloy wheels.</p>
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
            <img src="https://media.zigcdn.com/media/model/2020/Jun/x6-2020_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2020/Jun/front-1-4-left-652386419_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2020/Jun/rear-3-4-left-819172076_930x620.jpg" ></img>
          </div>
          <div>
              <p>Vehicle Stats</p>
              <p>Top Speed</p>
              <p>Acceleration</p>
              <p>Braking</p>
              <p>Traction</p>
          </div>
          <button onClick={this.handleClick}>ORDER</button>
          </div>} 
          <div>
            {this.state.bool2&&<div>
              
            {this.state.data.map(x=>{
                return <div>
                    <p>{x.name} </p>
                    <img src={x.img1}></img>
                    <img src={x.img2}></img>
                    <img src={x.img3}></img>
                    <div>
                        <p>SOLD</p>
                        <p>Thanks you for shopping at Legendary Motorsports! We hope you will be satisfied with your purchase.We are currentlyarranging transportation of your vehicle and will contact you for conforming your delivery</p>
                    </div>
                </div>
            })}
              </div>}
          </div>
      </div>
      )
    }
}

export default Eight