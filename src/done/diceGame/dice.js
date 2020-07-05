import React,{Component} from "react"

class Dice extends Component {

state= {
    dice1:[],
    dice2:[],
    player1:"p1",
    player2:"p2",
    result:""
    }

    handlePlayer = e => {
        this.setState({player1:prompt()})
        this.setState({player2:prompt()})
    }

    handleDice = e => {
        this.setState({dice1:[Math.floor(Math.random()*6)]})
        this.setState({dice2:[Math.floor(Math.random()*6)]})
        if(this.state.dice1<this.state.dice2) {
          return  this.setState({result:[this.state.player1,"won"]})
        } else if (this.state.dice2<this.state.dice1) {
            return this.setState({result:[this.state.player2,"won"]})
        } else if (this.state.dice1==this.state.dice2) {
            return this.setState({result:"draw"})
        } else {
            return this.setState({result:"some thing is wrong"})
        }
    }
    
  render() {
    return(
      <div>
    <div>
        <button onClick={this.handleDice}>Play</button>
        <button onClick={this.handlePlayer}>Edit Name</button>
       <p> {this.state.player1}   {this.state.player2} </p>
       <p> {this.state.dice1}  {this.state.dice2} </p>
        {this.state.result}
    </div>
      </div>
      )
    }
}

export default Dice