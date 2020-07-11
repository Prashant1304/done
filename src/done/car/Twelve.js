import React,{Component} from "react"
var url = [
   
  {
    id:12,
    url:'twelve/12' ,
    img1:"https://media.zigcdn.com/media/model/2020/Jun/phantom-1_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2020/Apr/side-view-1030955839_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2020/Apr/front-206718188_930x620.jpg",
    name:"car12",
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
          <h1>Rolls Royce Phantom</h1>
          <p>The Rolls-Royce Phantom VIII is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of the Rolls-Royce Phantom, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths.</p>
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
            <img src="https://media.zigcdn.com/media/model/2020/Jun/phantom-1_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2020/Apr/side-view-1030955839_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2020/Apr/front-206718188_930x620.jpg" ></img>
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