import React,{Component} from "react"
var url = [
  {
    id:4,
    url:"fourth/4",
    img1:"https://media.zigcdn.com/media/model/2020/May/gt-2020_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2020/May/front-1-4-left-1406441886_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2020/May/side-view-1364459260_930x620.jpg",
    name:"car4",
},
]

class Fourth extends Component {

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
        <div>{this.state.bool1&&
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
          <button onClick={this.handleClick}>ORDER</button>
          </div>
        }
        </div>
        <div>
          {this.state.bool2&&
          <div>
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
          </div>
          }
        </div>
      </div>
      )
    }
}

export default Fourth