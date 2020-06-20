import React,{Component} from "react"
class App extends Component {
state={
  count:0
}
  increment=() => {
    var inc = this.state.count
    this.setState({count:inc+1})
  }
  
  decrement =() => {
    var dec = this.state.count
    this.setState({count:dec-1})
  }

  render() {
    return(
      <div>
        <h1>COUNTER</h1>
       <h1>  {this.state.count}</h1>
        <br/> 
        <button onClick={this.increment}>increase count</button>
        <br/>
        <br/> 
        <button onClick={this.decrement}>decrement count</button>
      </div>
    )
  }
}
export default App