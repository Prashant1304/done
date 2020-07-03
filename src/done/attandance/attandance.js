import React,{Component} from "react"

class Dice extends Component {

state= {
rollno:"",
name:"",
rollnoData:[],
nameData:[],
all:[]   
}

handleRollNo= e => {
    e.preventDefault() 
    var roll = e.target.value
    this.setState({rollno:roll})
}
hnadleName= e => {
    e.preventDefault() 
    var name = e.target.value
    this.setState({name:name})
}
handleSubmit = e => {
    e.preventDefault() 
    this.setState({ nameData:[...this.state.nameData,this.state.name]})
    this.setState({ rollnoData:[...this.state.rollnoData,this.state.rollno]})
    this.setState({all:[this.state.nameData,this.state.rollnoData]})
    this.setState({name:""})
    this.setState({rollno:""})
}
  render() {
    return(
      <div>
          
          <form>
              <input type="number" value={this.state.rollno} onChange={this.handleRollNo} placeholder="Your RollNo"></input>
              <input value={this.state.name} onChange={this.hnadleName} placeholder="Your Name"></input>
          <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <div>
              {/* <div>
              { this.state.rollnoData.map((x,y) => {
                  return <div key={y}>{x} </div>
              })}
              </div>
              <div>
              
              </div> */}
              {[this.state.nameData,this.state.rollnoData].map((x,y)=>{
                  return <div key={y}> 
                    {x}
                  </div>
              })}
              <p></p>
            {/* <p>  {this.state.rollnoData}  {this.state.nameData} </p> */}
              
          </div>
      </div>
      )
    }
}

export default Dice