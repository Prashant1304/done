import React,{Component} from "react"

class Convert extends Component {
state= {
  feet:"",
  inch:"",
  total:[]
}
    handleFeet= e => {
        let feet = e.target.value
        this.setState({feet})
    }

    handleInch = e => {
        let inch = e.target.value
        this.setState({inch})
    }
    handleClick = e => {
        let feet =parseInt( this.state.feet)*12
        let inch =parseInt( this.state.inch)+feet
        let totalInches = inch*2.54
        this.setState({total:totalInches})
        this.setState({feet:"",inch:""})
        console.log(totalInches)
    }
  render() {
    return(
      <div>
      Feet:-  <input onChange = {this.handleFeet} value={this.state.feet}></input> <br/>
      Inch:-  <input onChange={this.handleInch} value={this.state.inch}></input> <br/>
        <button onClick={this.handleClick}>Convert</button>
       <p> {this.state.total} cm</p>
      </div>
      )
    }
    }
    export default Convert