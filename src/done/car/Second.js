import React,{Component} from "react"
var url= [
  {
    id:2,
        url:"second/2",
        img1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1580962193955/front-left-side-47.jpg?tr=w-456",
        img2:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Seltos/6232/1562746537969/side-view-(left)-90.jpg?tr=w-456",
        img3:"https://media.zigcdn.com/media/model/2020/Mar/front-1-4-left-690692512_930x620.jpg",
        name:"car2",
  }
]
class Second extends Component {

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
          <h1>Kia Seltos</h1>
          <p>Kia Seltos Engine, Transmission, and Mileage: It comes with three BS6-compliant engine options: a 1.5-litre petrol, 1.4-litre turbocharged petrol, and 1.5-litre diesel. While the 1.5-litre petrol motor is rated at 115PS/144Nm, the diesel engine puts out 115PS/ 250Nm. The 1.4-litre turbocharged petrol engine, which has an output of 140PS/242Nm, is only offered with the GT Line variants. It is available with either a 6-speed manual or various automatic transmission options depending on the engine. In case of automatic transmissions, the diesel engine gets a 6-speed torque converter while the petrol is either paired to a CVT or a DCT gearbox. The 1.4-litre turbo-petrol can be paired to either a 6-speed manual gearbox or a 7-speed DCT (dual-clutch transmission). Kia claims a fuel efficiency of 16.5kmpl for the petrol-manual and 16.8kmpl for the petrol-CVT variants. The diesel manual’s claimed fuel efficiency figure stands at 21kmpl while the 6-speed AT’s stands at 18kmpl. The 1.4-litre turbo-petrol, paired with the DCT, has a claimed mileage of 16.5kmpl while the manual returns 16.1kmpl.</p>
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
            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1580962193955/front-left-side-47.jpg?tr=w-456" ></img>  
            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Seltos/6232/1562746537969/side-view-(left)-90.jpg?tr=w-456" ></img>
            <img src="https://media.zigcdn.com/media/model/2020/Mar/front-1-4-left-690692512_930x620.jpg" ></img>
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

export default Second