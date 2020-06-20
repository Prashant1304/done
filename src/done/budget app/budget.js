import React,{Component} from "react"
class App extends Component {
  state = {
    budgetValue:"",
    budgetData:[],
    expenseValue:"",
    expenseValueData:[],
    expenseTitle:"",
    expenseTitleData:[],
    expenceData:[],
    addition:[],
  }
  
  handleTitle = e => {
    let value = e.target.value
    this.setState({expenseTitle:value})
  }
  
  handleTitleData = e => {
    this.setState({expenseTitleData:[...this.state.expenseTitleData,this.state.expenseTitle] })
    this.setState({expenseValueData:[...this.state.expenseValueData,this.state.expenseValue]})
    this.setState({expenseTitle:"",expenseValue:""})
    // console.log(add)
  }
  
  handleAmount = e => {
    let value = e.target.value
    this.setState({expenseValue:value})
  }
  
  handleBudgetValue = e =>{
    let target =e.target.value
   this.setState({budgetValue:target})
  
  }

  handleBudgetData = e => {
    this.setState({budgetData:this.state.budgetValue})
  }
  render() {
    var add = this.state.expenseValueData
    var count = 0
     for(var i = 0;i<=add.length-1;i++) {
      var numberArray = add.map(Number)  
        count+=numberArray[i]
      }
      var out = count
      var balance = this.state.budgetData - out
      console.log(balance)
  
    return(
      <div>
        <div>
          <h1>BUDGET APP</h1>
        </div>
        <div>
        <p>please enter your budget here</p>
        <input type= "number" value= {this.state.budgetValue} onChange= {this.handleBudgetValue} ></input>
        <button onClick= {this.handleBudgetData} >Save</button>
        </div>
        <div>
        <p>Please enter your Expense Title</p>
          <input value= {this.state.expenseTitle} onChange = {this.handleTitle} ></input>
          <p>Please enter your Expense Amount</p>
          <input value= {this.state.expenseValue} onChange = {this.handleAmount} type = "number"></input>      
          <button onClick= {this.handleTitleData}>Calculate</button>
        </div>
        <div>
          <p> Budget:- {this.state.budgetData} </p>
          <p> Expenxes:- {out}</p>
          <p> Balance:- {balance} </p>
          <p>Product & Amount</p>
          {[this.state.expenseTitleData,this.state.expenseValueData].map((x,y)=> {
            return <div key={y}>
             <div>  {x +"\n"} </div>
              {/* {console.log(x)} */}
            </div>
          })}
          {/* <div> <a> {this.state.expenseTitleData}</a> <a> {this.state.expenseValueData} </a> </div> */}
        </div>
      </div>
      )
    }
    }
    export default App