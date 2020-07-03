import React,{Component} from "react"

class Guess extends Component {
    state={
        value:"",
        guessData:[],
        count:10,
        randomNumber:"",
        compare:[]
    }
    componentDidMount () {
        var number = Math.floor(Math.random()*100)
        this.setState({randomNumber:number})
        
    }
    handleValue= e => {
        let val = e.target.value
        this.setState({value:val}) 
    }

    handleGuessData= e => {
        this.setState({guessData:[...this.state.guessData,this.state.value]})
        this.setState({value:""})
        this.setState({count:this.state.count-1})
        if (this.state.count==0) {
            return  this.setState({compare:alert( "Game Over")})
        } else if (this.state.randomNumber < this.state.value){
            return this.setState({compare:"Too High"})
        } else if (this.state.randomNumber > this.state.value){
            return this.setState({compare:"too low"})
        } else if(this.state.randomNumber==this.state.value) {
            return alert("Right Guess", this.setState({compare:"Right Guess"})) 
        }
    }
    
render() {
    return(
      <div>
        <div>
        <p>Try and guess a random number between 1 and 100.</p>
        <p>You have 10 attempts to guess the right number.</p>
        <p> Guess a number </p> 
        </div>
        <div>
           <input type="number" value={this.state.value} onChange={this.handleValue} ></input>
           <button onClick={this.handleGuessData} >Submit</button>
        </div> 
        <div>
        <p> Previous Guesses:- {this.state.guessData+","}    </p>
        <p>Guesses Remaining:  { this.state.count} </p>
        {this.state.compare}
        </div>
        </div>
      )
    }
    }
    export default Guess