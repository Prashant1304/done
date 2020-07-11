import React,{Component} from "react"
var url = [
  {
    id:11, 
    url:"eleven/11",
    img1:"https://media.zigcdn.com/media/model/2020/Jan/porsche-panamera_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2020/Jan/207_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2020/Jan/side-view-81196877_930x620.jpg",
    name:"car11",
},
]
class Eleven extends Component {

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

export default Eleven