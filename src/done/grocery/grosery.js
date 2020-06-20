import React,{Component} from "react"
class App extends Component {
  state = {
    value:"",
    data:["orange","mango","420"]
  }

  handleChange =e => {
    const message = e.target.value
    this.setState({value:message})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({data:[...this.state.data,this.state.value]})
    this.setState({value:""})
    console.log(this.state.data )
  }

  handleDelete= e=>{
    const newArr = [...this.state.data];
    newArr.splice(e, 1);
    this.setState({data: newArr})
    console.log(newArr)
  }
  
  render() {
    return(
      <div> 
        <p>You have total {this.state.data.length} Grocery in your list </p>
        <form onSubmit ={this.handleSubmit} >
          <input value={this.state.value} type ="text" onChange={this.handleChange} />
          <button  >submit</button>  
        </form>
        {this.state.data.map((x,y) => {
          return <li key={y}>{x} 
               <button onClick={() => {this.handleDelete(y)}}>* {console.log(y)} </button>
          </li>
        } )}
      </div>
    )
  }
}
export default App