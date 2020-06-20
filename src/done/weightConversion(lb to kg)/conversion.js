import React,{Component} from "react"
class App extends Component {
  state = {
    value:"",
    final:[]
  }
  handleChange = e => {
    var mes = e.target.value
    this.setState({value:mes})
  }
  handleClick= e => {
    var handle = this.state.value
    var calculate = 0.45359237 * handle +1
    this.setState({final: Math.floor( calculate)})
    this.setState({value:""})
  }
  render() {
    return(
      <div>
       <p>Weight Converter (pounds to kg)</p>
       <p>Enter weight value in pounds:- </p>
        <input value={this.state.value} placeholder="enter pound value" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Calculate</button>    
       
       <p> kg:-  {this.state.final} </p>
      </div>
      )
    }
    }
    export default App