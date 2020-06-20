import React,{Component} from "react"
var dataa =[
  {
    id:1,
    img:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:3,
    img:"https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
]

class App extends Component {
  state = {
    name:"",
    course:"",
    author:"",
    data1:[],
    data2:[],
    data3:[],
    apiData:dataa
  }

  handleName = e => {
    const val = e.target.value
    this.setState({name:val})
  }

  handleCourse = e => {
    const val = e.target.value
    this.setState({course:val})
  }

  handleAuther = e => {
    const val = e.target.value
    this.setState({author:val})
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.setState({data1:this.state.name})
    this.setState({data2:this.state.course})
    this.setState({data3:this.state.author})

    this.setState({author:"",name:"",course:""})
  }
  randomImage = e => {
    var random = Math.floor(Math.random()*dataa.length)
    console.log(dataa[random])
    var filter = dataa.filter(x => 
      x === dataa[random])
    this.setState({apiData:filter})
  }
  render() {
    return(
      <div>
        <p>Course Create</p>
        <form onSubmit = {this.handleSubmit}> 
          <input value={this.state.name} onChange = {this.handleName} type="text" placeholder="name"></input>
          <br/>
          <input value={this.state.course} onChange = {this.handleCourse} type="text" placeholder="course"></input>
          <br/>
          <input value={this.state.author} onChange = {this.handleAuther} type="text" placeholder="author"></input>
          <br/>
          <button onClick={this.randomImage}>submit
          
          </button>
        </form>
        {this.state.apiData.map(x=>{
          return  <div key ={x.id} >
            <img src = {x.img} alt = "no img"></img>
            <p>name:- {this.state.data1} </p>
            <p>course:- {this.state.data2} </p>
            <p>author:- {this.state.data3} </p>
            </div>
        })}
      </div>
    )
  }
}
export default App