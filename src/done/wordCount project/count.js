import React,{Component} from "react"
// import './App.css';

class App extends Component {
  state= {
    value:"",
    time:[]
  }
  handleChange = e => {
    let target = e.target.value
    this.setState({value:target})
  }
  handleClick = e => {
    this.setState({time:this.state.value})
  }
  render() {
    return(
      <div>
        <input value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>click</button>
        <p> {this.state.time.length} </p>
      </div>
      )
    }
    }
    export default App