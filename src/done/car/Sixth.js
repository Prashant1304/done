import React,{Component} from "react"
var url = [
  {
    id:6 ,
    url:"sixth/6",
    img1:"https://media.zigcdn.com/media/model/2019/Sep/bmw_5_series_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2018/Nov/front-1-4-left-1316676779_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2018/Nov/side-view-6012082_930x620.jpg",
    name:"car6",
},
]
class Sixth extends Component {

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
          <h1>Audi RS7</h1>
          <p>Audi India has announced that the RS7 Sportback will be launched on July 16, 2020. Bookings for the upcoming sports coupe are already open for a token amount of Rs 10 lakh. It will get a 4.0-litre twin-turbo V8 paired to a 48V mild-hybrid system which will produce 600PS and 800Nm. Drive will be sent to all four wheels via an 8-speed automatic transmission. All that power helps the RS7 go from 0-100kmph in just 3.6 seconds with an electronically limited speed of 250kmph. </p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/bmw_5_series_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Nov/front-1-4-left-1316676779_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Nov/side-view-6012082_930x620.jpg" ></img>
          </div>
          <div>
              <p>Vehicle Stats</p>
              <p>Top Speed</p>
              <p>Acceleration</p>
              <p>Braking</p>
              <p>Traction</p>
          </div>
          <button onClick={this.handleClick}>ORDER</button>
          </div> }
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

export default Sixth