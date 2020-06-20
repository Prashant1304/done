import React,{Component} from "react"
class App extends Component {
    state = {
      value:"",
    }

    handlechange=(e)=> {
      
      this.setState({value:e.target.value})
    }
    
    display =e =>{
      if(e.keyCode===13) {
          
        alert( e.target.value)
      }
      
    }
    render() {
      
      return(
        <div>
        <input type="text" onChange={this.handlechange} onKeyDown={this.display}></input> 
      </div>
    )
  }
}
export default App



