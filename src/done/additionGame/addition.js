import React,{Component} from "react"

class Addition extends Component {
  state= {
    ran1:"",
    ran2:"",
    value:"",
    time:[],
    result:["Correct","InCorrect"],
    output:[]
  }

    componentDidMount() {
      var random1 = Math.floor(Math.random()*1000)
      var random2 = Math.floor(Math.random()*1000)
      this.setState({ran1:random1})
      this.setState({ran2:random2})
      this.setState({time:random1+random2 })
      console.log(random1,random2)
      
      
    }
    
    handleValue = e => {
      let target = e.target.value
      this.setState({value:target})
    }
    
    handleutput = e => {
      e.preventDefault()
      this.setState({value:""})
      var random1 = Math.floor(Math.random()*1000)
      var random2 = Math.floor(Math.random()*1000)
      this.setState({ran1:random1})
      this.setState({ran2:random2})
      if(this.state.value===this.state.time){
        return this.setState({output:this.state.result[0]})
      } else {
        return this.setState({output:this.state.result[1]})
      }
    }
  render() {
    return(
      <div>
        <p> {this.state.ran1} + {this.state.ran2} = </p>
        <input value={this.state.value} type="number" onChange={this.handleValue}></input>
        
       <button onClick={this.handleutput} >Check</button> 
       <p> {this.state.output}  </p>
      </div>
      )
    }
    }

    export default Addition
