import React,{Component} from "react"

class Magic extends Component {

state= {
    answers : ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'],
    value:"",
    question:[],
    answer:[]
}
handleValue= e => {
    let target = e.target.value
    this.setState({value:target})
}
handleClick= e => {
    this.setState({question:this.state.value})
    let random = Math.floor(Math.random()*this.state.answers.length)
    let ans = this.state.answers[random]
    console.log(ans)
    this.setState({answer:ans})
}
  render() {
    return(
      <div>
          <input value={this.state.value} onChange={this.handleValue} ></input>
          <button onClick={this.handleClick}>Ask</button>
      <p> Question: {this.state.question}?</p>
       <p> Response: {this.state.answer}</p>
      </div>
      )
    }
}

export default Magic