import React,{Component} from "react"
var data = [
  {
    id:1,
    img:"https://images.unsplash.com/photo-1576838202636-d60ff3ee1fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name:"Himanshu",
    lastName:"Roy",
    location:'Sion-Mumbai-India',
    phone:7208801228,
    email:"himanshuRoy@gmail.com"
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1535913029629-a8d3b56b02a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name:"jagat",
    lastName:"jagtap",
    location:"Dadar-Mumbai-India",
    phone:8369227838,
    email:"jagatJagtap@gmail.com"
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1541726156-b8aff4dcce65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name:"sachin",
    lastName:"joshi",
    location:"kurla-Mumbai-India",
    phone:9930897016,
    email:"sachinJoshi@gmail.com"
  },
  {
    id:4,
    img:"https://images.unsplash.com/photo-1558216144-fef86b75da36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name:"himesh",
    lastName:"reshmeia",
    location:"Andheri-Mumbai-India",
    phone:7569407358,
    email:"himeshReshemia@gmail.com"
  },
  {
    id:5,
    img:"https://images.unsplash.com/photo-1562706553-a0e41eb8d066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name:"Deamon",
    lastName:"Salvator",
    location:"Washington-USA",
    phine:"9567409378",
    email:"DeamonSalvator@gmail.com"
  }
                
] 
class App extends Component {
  state={
    data:data
  }
  handleChange=e=>{
    var random = Math.floor(Math.random()*data.length)
    // console.log(data[random])
    var filter = data.filter(x =>{
      return  x === data[random]
    })
    this.setState({data:filter })
    return data[random] 
    
  } 
  render() {
    return(
      <div>
        <div>
          <button onClick ={this.handleChange} >Change</button>
          {this.state.data.map(x=>{
            return <div key={x.id}>
            <img src={x.img} style={{width:"27%"}} alt="no display"></img>
            <p>Name:- {x.name} </p>
            <p>last Name:- {x.lastName} </p>
            <p>location:- {x.location} </p>
            <p>Phone:- {x.phone} </p>
            <p>Email:- {x.email} </p>
            </div>
          })}
        </div>
      </div>
      )
    }
    }
    export default App