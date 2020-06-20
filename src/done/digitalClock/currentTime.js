import React,{Component} from "react"
// import './App.css';

class App extends Component {
  state= {
    time:[]
  }
  componentDidMount() { 
     setInterval(() => {
        this.setState({ time: new Date() });
    },1000); 
}
  render() {
    return(
      <div>
      <p>YOUR LOCAL TIME </p>
      {/* <h1>{i}</h1> */}
      {this.state.time.toLocaleString().slice(11,20)}
      </div>
      )
    }
    }
    export default App