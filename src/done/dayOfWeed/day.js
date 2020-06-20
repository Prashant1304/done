import React,{Component} from "react"
// import './App.css';

class App extends Component {
  state= {
    ran1:"",
    ran2:"",
    time:[]
  }

    componentDidMount() {
      var random1 = Math.floor(Math.random()*1000)
      var random2 = Math.floor(Math.random()*1000)
      this.setState({ran1:random1})
      this.setState({ran2:random2})
      this.setState({time:random1 })
      var date = new Date()
      var currentDay = date.getDay()
      console.log( currentDay)
      this.setState({time:this.state.time[currentDay]})
      if(currentDay===6 ||currentDay===7){
        return this.setState({value:"WEEKEND Time For Party "})
      } else {
        return this.setState({value:"WEEKDAY Work Has to be done"})
      }
    }

  render() {
    return(
      <div>
        <p>Today is:- </p>
        <p> {this.state.time} </p>
        {this.state.value}
      </div>
      )
    }
    }

    export default App
