import React,{Component} from "react"
var url =[
  {
    id:3,
    url:"third/3",
    img1:"https://media.zigcdn.com/media/model/2019/Sep/lamborghini-aventador_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2018/Oct/front-1-4-left-1268321303_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2018/Oct/side-view-576753972_930x620.jpg",
    name:"car3",
},
]
class Third extends Component {

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
          <h1>Lamborghini Aventador</h1>
          <p>The Aventador was first launched in India (in the LP700-4 guise) in November 2011, soon after it was showcased for international markets at the Geneva Motor Show earlier that year. Since then, the range has been updated with the Aventador Roadster LP700-4 in January 2013, one of the 600-unit only Aventador SV LP750-4 was imported to India in November 2015 while the first Aventador Roadster SV LP750-4 was imported later.</p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/lamborghini-aventador_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Oct/front-1-4-left-1268321303_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Oct/side-view-576753972_930x620.jpg" ></img>
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

export default Third