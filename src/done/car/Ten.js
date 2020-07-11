import React,{Component} from "react"
var url = [
  {
    id:10,
    url:"ten/10",
    img1:"https://media.zigcdn.com/media/model/2019/Sep/mercedes-benz-cls_930x620.jpg",
    img2:"https://media.zigcdn.com/media/model/2018/Nov/side-view-1991835515_930x620.jpg",
    img3:"https://media.zigcdn.com/media/model/2018/Nov/rear-3-4-left-1987307605_930x620.jpg",
    name:"car10",
},
]
class Ten extends Component {

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
          <h1>Mercedes-Benz CLS</h1>
          <p>Mercedes-Benz has launched the third-generation CLS 4-door coupe in India. The CLS 300 d is priced at Rs 84.7 lakh, ex-showroom India.</p>
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
            <img src="https://media.zigcdn.com/media/model/2019/Sep/mercedes-benz-cls_930x620.jpg"></img>  
            <img src="https://media.zigcdn.com/media/model/2018/Nov/side-view-1991835515_930x620.jpg" ></img>
            <img src="https://media.zigcdn.com/media/model/2018/Nov/rear-3-4-left-1987307605_930x620.jpg" ></img>
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

export default Ten