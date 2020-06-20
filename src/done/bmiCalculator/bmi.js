import React,{Component} from "react"
class App extends Component {
  state = {
    height:"",
    weight:"",
    final:[]
  }
  handleHeight = e => {
    let target = e.target.value
    this.setState({height:target})
  } 
  handleWeight = e => {
    let target = e.target.value
    this.setState({weight:target})
  }
  handleCalculaton = e => {
    var cal = (this.state.weight / ((this.state.height*this.state.height)/10000 )).toFixed(2)
    this.setState({final:cal})
    this.setState({height:"",weight:""})
  }
  render() {
    return(
      <div>
        <h1>BMI CAlCUlAToR</h1>
     <p> Height in cm :-  <input type="number" value={this.state.height} onChange={this.handleHeight} ></input> </p>
     <p> Weight in kg :-  <input type="number" value={this.state.weight} onChange={this.handleWeight}></input> </p>
     <button onClick={this.handleCalculaton}>calculate</button>
     <p> <b> {this.state.final} </b> </p> 
    <div>
      <p>BMI weight guide</p>
      <p>Under Weight = Less than 18.6</p>
      <p>Normal Range = 18.6 and 24.9</p>
      <p>Overweight = Greater than 24.9</p>
    </div>
      </div>
      )
    }
    }
    export default App