import React,{Component} from "react"
import './sweet.css';

var data=[
  {
    id:1,
    image:"https://romeojeremiah.github.io/Filter-Project/img/sweets-1.jpeg",
    name:"Sweet item",
    money:5
  },
  {
    id:2,
    image:"https://romeojeremiah.github.io/Filter-Project/img/cupcake-1.jpeg",
    name:"Cupcake item",
    money:5
  },
  {
    id:3,
    image:"https://romeojeremiah.github.io/Filter-Project/img/cake-1.jpeg",
    name:"Cake item",
    money:5
  },
  {
    id:4,
    image:"https://romeojeremiah.github.io/Filter-Project/img/doughnut-1.jpeg",
    name:"Dougnut item",
    money:5
  },
  {
    id:5,
    image:"https://romeojeremiah.github.io/Filter-Project/img/sweets-2.jpeg",
    name:"Sweet item",
    money:10
  },
  {
    id:6,
    image:"https://romeojeremiah.github.io/Filter-Project/img/cupcake-2.jpeg",
    name:"Cupcake item",
    money:10
  },
  {
    id:7,
    image:"https://romeojeremiah.github.io/Filter-Project/img/cake-2.jpeg",
    name:"Cake item",
    money:10
  },
  {
    id:8,
    image:"https://romeojeremiah.github.io/Filter-Project/img/doughnut-2.jpeg",
    name:"Dougnut",
    money:10
  },
  {
    id:9,
    image:"https://romeojeremiah.github.io/Filter-Project/img/sweets-3.jpeg",
    name:"Sweet item",
    money:15
  },
  {
    id:10,
    image:"https://romeojeremiah.github.io/Filter-Project/img/cupcake-3.jpeg",
    name:"Cupcake item",
    money:15
  },
  {
    id:11,
    image:"https://romeojeremiah.github.io/Filter-Project/img/cake-3.jpeg",
    name:"Cake item",
    money:"15"
  },
  {
    id:12,
    image:"https://romeojeremiah.github.io/Filter-Project/img/doughnut-3.jpeg",
    name:"Dougnut item",
    money:15
  }
]


class App extends Component {
  state= {
    value:"",
    data:data,
    copyData:data
  }
    handleChange =e => {
      this.setState({value:e.target.value})
    }
    handleButtonChange = e => {
      var message = e.target.value
      var filter = this.state.data.filter(x => {
       if("All" === message) {
         return  x
       } else if (x.name ===message) {
         return x
       }
        
      })
      // this.setState({value:message})
      this.setState({data:filter})
      console.log(message)
    }
    reset= e => {
      this.setState({data:this.state.copyData})
    }
  
  render() {
  var handleSearchFilter = this.state.data.filter(x=>x.name.indexOf(this.state.value) !== -1)
    return(
    <div>
      {console.log(handleSearchFilter)}
      {/* header */}
      <div>
      <img src="data:image/jpeg;base64,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" ></img>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>store</p>
        <p>&#x1F4DE;&nbsp;+91 7208801223</p>
        <button>&#128722; 2item-$10.49</button>
      </div>
      </div>
      {/* main/middle */}
      <div>
        <div>
        <p>Welcome To Grandma's</p>
        <button>EXPLORE</button>
        </div>
        <div>
         <p>About Us</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
         <button>EXPLORE</button> 
         <img src="https://romeojeremiah.github.io/Filter-Project/img/sweets-1.jpeg"></img>
        </div>
        <div>
          <p>Our Store</p>
          <div >
          
            <select onChange={this.handleButtonChange} onFocus={this.reset}  >
              <option onFocus={this.reset}> Explore</option>
              <option value="All" > All</option>
              <option value="Sweet item">Sweets</option>
              <option value="Cupcake item">Cupcakes</option>
              <option value="Cake item">Cakes </option>
              <option value="Dougnut item">Dougnuts</option>
            </select>
          </div>
            <br/>
          <input value={this.state.value} onChange={this.handleChange} placeholder="item..." type="text"></input>
        {handleSearchFilter.map(item => <div key={item.id}>
          <img src = {item.image} className="image"/>
         <p> {item.name} </p>
         <p> {item.money} </p>
        </div>)}
        </div>

      </div>
    </div>  
  )}
}

export default App