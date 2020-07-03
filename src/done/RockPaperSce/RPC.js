import React,{Component} from "react"

class RPS extends Component {

state= {
    value:"",
    player:0,
    computer:0,
    random:[],
    draw:0
    }

    handleValue=e=> {
        let val = e.target.value
        this.setState({value:val})
        var rsp = ["rock","paper","scissor"]
        var ran = Math.floor(Math.random()*rsp.length)
        var out = rsp[ran]
        this.setState({random:out})
        console.log(out)
        

        if (this.state.value=="paper"&&this.state.random=="rock") {
            return this.setState({player:[this.state.player+1,1 ]})
        } else if (this.state.value=="scissor"&&this.state.random=="paper") {
            return this.setState({player:[this.state.player+1,2 ] })
        } else if (this.state.value=="rock" && this.state.random=="scissor") {
            return this.setState({player:[this.state.player+1,3 ] })
        } else {
            return this.setState({computer:this.state.computer+1})
        }
       
        
    }
    
  render() {
    return(
      <div>
          <div>
              <p> Rock, Paper, Scissors </p>
              <p>Select either rock, paper, or scissors and see if you can beat the computer!</p>
              <p>Remember: “Rock breaks scissors, scissors cuts paper, paper covers rock.”</p> 
          </div>
          <div>
              <button value="rock" onClick={this.handleValue}>Rock</button>
              <br/>
              <button value="paper" onClick={this.handleValue}>Paper</button>
              <br/>
              <button value="scissor" onClick={this.handleValue}>Scissors</button>
              
                
                computer:{this.state.computer}
                player:{this.state.player}
                draw: {this.state.draw}
                <p>player:{ this.state.value}  </p>
                <p>random: { this.state.random}</p>
          </div>
      </div>
      )
    }
}

export default RPS