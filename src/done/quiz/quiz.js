import React,{Component} from "react"
var quiz = [
    {
        question: 'What is the baby of a Moth known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 3
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 2
    }, 
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 0
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 1
    },
    {
        question: 'What is a baby Goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 1
    }
]   
class Quiz extends Component {
    state = {
        value:"",
        choices:[],
        question:[],
        answer:[],
        count:0,
        right:0,
        checked:false
    }
    componentDidMount(){
    
    }

    handleValue= e => {
        let val = e.target.value
        this.setState({value:val})
    //   console.log(val)
   
    if(this.state.checked !== e.target.checked) {
        this.setState({
          checked:e.target.checked
        });
     }
    
    }

    handleClick = e => {
        this.setState({checked:false})
        this.setState({choices:quiz[this.state.count].choices})
        this.setState({question:quiz[this.state.count].question})
        this.setState({answer:quiz[this.state.count].correctAnswer})
        this.setState({count:this.state.count+1})
        if(this.state.choices.indexOf(this.state.value)===this.state.answer) {
            
            return this.setState({right:this.state.right+1})
        } else {
            return "false"  
        }
    }
    
    render(){
        return( 
        <div> 
            <h1>{this.state.question} </h1>
            {this.state.choices.map((x,y)=>{ 
                return <div key={y}> 
                <div> 
                   <input  value={x} checked={this.state.checked}  onChange={this.handleValue} type="radio"  name="abc" /> 
                   <label value={this.state.value} onChange={this.handleValue}>{x} </label>
                   </div>
                </div>
            })}
            {/* { this.state.choices.indexOf(this.state.value )} */}
            {console.log( this.state.value,"value")}
            {/* {this.state.value} */}
            {console.log (this.state.choices,"choice")}
            {/* {this.state.choices} */}
            <button onClick={this.handleClick}>Next</button>
            <p>count {this.state.right}</p>
        </div>
        )
    }
}
export default Quiz