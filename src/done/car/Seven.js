import React,{Component} from "react"
var url = [
  {
    id:7,
    url:"seven/7",
    img1:"https://media.zigcdn.com/media/model/2019/Sep/mercedes-benz-s-class_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2018/Oct/front-1-4-left-1132450672_930x620.jpg" ,
    img3:"https://media.zigcdn.com/media/model/2018/Oct/side-view-2069876068_930x620.jpg",
    name:"car7",
},
]
class Seven extends Component {

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
        <div> {this.state.bool1&&<div>
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
          <button onClick={this.handleClick}>ORDER</button>
          </div>} </div>
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

export default Seven