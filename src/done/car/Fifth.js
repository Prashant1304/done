import React,{Component} from "react"
var url = [
  {
    id:5,
    url:"fifth/5",
    img1:"https://media.zigcdn.com/media/model/2019/Sep/rolls-royce-ghost_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2018/Oct/front-1-4-left-1424475234_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2018/Oct/rear-back-1304508046_930x620.jpg",
    name:"car5",
},
]
class Fifth extends Component {

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
        {this.state.bool1&&
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
          <button onClick={this.handleClick}>ORDER</button>
          </div>
        }
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

export default Fifth