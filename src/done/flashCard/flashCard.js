import React,{Component} from "react"
class App extends Component {
  state={
    question:"",
    answer:"",
    display:false,
    questionData:[],
    answerData:[],
    hidden:[]
  }
  
  handleQuestion = e => {
    let message = e.target.value
    this.setState({question:message})
    console.log(message)
  }

  handleAnswer = e =>{
    let message = e.target.value
    this.setState({answer:message})  
    console.log(message)
  }

  handleHiddenAnswer= e => {
    let message = this.state.answerData
    this.setState({hidden:[...this.state.hidden,message] })
  }

  handleToggle = e => {
    e.preventDefault()
    this.setState({display:!this.state.display})
  }

  handleQuestionData = e =>{
    e.preventDefault()
    this.setState({questionData:[this.state.question,...this.state.questionData] })
    this.setState({answerData:[this.state.answer]})
    this.setState({question:"",answer:""})
  }
  
  handleAnswerData = e => {
    e.preventDefault()
    this.setState({hidden:this.state.answer})
    this.setState({answerData:[this.state.answer,...this.state.answerData]})
  }

  render() {
      return(
        <div> 
            <button onClick={this.handleToggle}>Add Question</button>
            {this.state.display &&
            <form  >
            <p>Question</p>
            <textarea value={this.state.question} onChange={this.handleQuestion}></textarea>
            <br/>
            <p>answer</p>
            <textarea value={this.state.answer} onChange={this.handleAnswer}></textarea>
            <input value={this.state.answer} onChange={this.handleHiddenAnswer} type="hidden"></input>
            <br/>
            <button onClick={this.handleQuestionData}>Save</button>
          </form>
          }
          <div>
            {this.state.display &&
            <form >
         </form>
        }
        <div>
        {  this.state.questionData.map((x,y)=>{
          return <div key ={y}>
           <h1> {x} </h1>
           {/* <button onClick= {this.handleHiddenAnswer} >Show Answer</button> */}
           <button onClick= {this.handleHiddenAnswer} >Show Answer</button>

          </div>
        })}
        {  this.state.answerData.map((x,y)=>{
          var out = x= this.state.hidden 
          return <div key ={y}>
            
           <h1> {out } 
           </h1>
           </div>
        })}
        
        </div>
        </div>
        </div>
      )
    }
    }
    export default App