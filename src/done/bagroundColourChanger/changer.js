import React,{Component} from "react"
import './App.css';

class App extends Component {
state= {
  colour:""
}
handleColour = e => {
  var tar = e.target.value
  this.setState({colour:tar})
}
  render() {
    return(
      <div style={{backgroundColor:this.state.colour}} className="baground">
        <p>Below enter your colour</p>
        <input value={this.state.colour} onChange={this.handleColour} placeholder="Please Enter Your Colour Here"></input>
      </div>
      )
    }
    }
    export default App