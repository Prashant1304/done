import React,{Component} from "react"
 class App extends Component{
  state = {
    value:"",
    final:[]
  }

  handlechange = e => {
    var message = e.target.value
    this.setState({value:message})
    // console.log(message)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({value:""})
    this.setState({final:[...this.state.final,this.state.value]})
    console.log(this.state.final )
  }

    handleDelete = index =>{
      const newArr = [...this.state.final];
      newArr.splice(index, 1);
      this.setState({final: newArr})
      console.log(newArr)
  }
  
  render() {
          return(
        <div>
          <p>You Have {this.state.final.length} To Do List</p> 
          <form onSubmit={this.handleSubmit} >
            <input  value={this.state.value} onChange={this.handlechange} ></input>
            <button type="submit"  >add </button>
          </form>
          <ul>
            {this.state.final.map((x,y)=>{
              //y is index
             return <li key={y} >
               {x}
               <button onClick={() => {this.handleDelete(y)}}>* {console.log(y)} </button>
               {/* <button  onClick={this.handleEdit}>#</button> */}
                 </li>
            })}
          </ul>
        </div>
     
      )
    }
 }
 
 export default App
