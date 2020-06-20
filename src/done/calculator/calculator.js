import React,{Component} from "react"
// import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      value:""
    }
  }
  onClick = e => {
    if(e === "=") {
      this.setState({value:(eval(this.state.value))})
    } else if (e === "c") {
      this.setState({value:""})
    }
     else {
    this.setState({value:this.state.value+e})
  }
}

  handleClear = () => {
    this.setState({value:""})
  }
  


render() {
  return(
    <div>
      {console.log( this.state.value)}
     <p value = {this.state.value}> {this.state.value} </p>
      <KeyPad onClick ={this.onClick} />
    </div>
  )
}
}

class KeyPad extends Component {
  state = {
    value:""
  }
  // handleChange = e => {
  //   let value = this.state.value
  //   this.setState({value:value+e}) 
  //   console.log(this.state.value)
  //   }  
  render(){
    return(
      <div>
      {/* {console.log(this.handleChange)} */}
      
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button"  value="+">+</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="*">*</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="-">-</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="/">/</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="1">1</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="2">2</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="3">3</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="4">4</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="5">5</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="6">6</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="7">7</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="8">8</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="9">9</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="0">0</button>
      <button onClick={e=>{this.props.onClick(e.target.value)}} type="button" value="=">=</button>
      <button value="c" onClick={e=>{this.props.onClick(e.target.value)}}>c</button>
      {/* {this.state.value} */}
    </div>
    )
  }
}

export default App
