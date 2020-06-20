import React,{Component} from "react"
class App extends Component {
  state = {
    loan:"",
    intrest:"",
    month:"",
    final:[0]
  }
  handllone = e => {
    let val = e.target.value
    this.setState({loan:val})
  }
  handlInterest = e => {
    let val = e.target.value
    this.setState({intrest:val})
  }
  handlMonth = e => {
    let val = e.target.value
    this.setState({month:val})
  }
  handleClick = e => {
    var amount  = this.state.loan/this.state.intrest
    var tot = amount + parseInt( this.state.loan)
    var out = tot/this.state.month
    this.setState({final:out})
    this.setState({loan:"",intrest:"",month:""})
    console.log(this.state.final)
  }
  render() {
    return(
      <div>
      <p>  <b> Loan Calculator </b> </p>  
      <p>Loan Amount :-  <input type="number" value={this.state.loan}    onChange={this.handllone} ></input> </p>
      <p>Interest Rate in % :-<input type="number" value={this.state.intrest} onChange={this.handlInterest} ></input> </p>
      <p>Months to Pay :-<input type="number" value={this.state.month}   onChange={this.handlMonth} ></input> </p>
      <button onClick={this.handleClick} >Calculate</button>
      <p> You have to pay <b>  {this.state.final} </b> /-month </p>
      </div>
      )
    }
    }
    export default App