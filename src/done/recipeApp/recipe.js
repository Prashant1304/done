import React,{Component} from "react"

class Recipe extends Component {

state= {
    title:"",
    steps:"",
    ingredient:"",
    titleData:[],
    stepsData:[],
    ingData:[],  
    display:false
    
    }

    handleTitle =e => {
      var title =e.target.value
      this.setState({title})
    }

    handleSteps = e => {
      var steps = e.target.value
      this.setState({steps})
    }
    handleIng=e=>{
      let ingredient = e.target.value
      this.setState({ingredient})
    }

    handleToggle = e => {
      this.setState({display:!this.state.display})
    }

    handleIngData= e => {
      this.setState({ingData:[...this.state.ingData,this.state.ingredient]})
      this.setState({ingredient:""})
    }
    
    handleSubmit = e => {
      this.setState({stepsData:[ ...this.state.stepsData,this.state.steps]})
      this.setState({stepsData:""})
      this.setState({titleData:[...this.state.titleData,this.state.title]})
      this.setState({title:""})
      this.setState({stepsData:[...this.state.stepsData,this.state.steps]})
    }

  render() {
    return(
      <div>
          <div>
          <p>What recipe do you want to save today?</p>
          </div>
          <div>
            <input></input> <br/> 
            <button onClick={this.handleToggle}>Add Recipe</button>
          </div>
          {this.state.display&& <div>

             <p>Add Recipe</p>
          <div>
            <input value={this.state.title} onChange={this.handleTitle}></input><br/> 
            <textarea value={this.state.steps} onChange={this.handleSteps} ></textarea>
          <p>Ingredients</p>
          <p>After adding your ingredient, use the checkbox to indicate if you have it in stock.</p>
          <input value={this.state.ingredient} onChange={this.handleIng}></input> 
          <button  onClick={this.handleIngData}>Add Ingridient</button><br/>
          <div>
            {/* {this.state.ingredient} */}
          </div>
          <button onClick={this.handleSubmit}>Add New Recipe</button>
          </div>
          <p>
          {this.state.titleData}
          </p>
          ingerdient:-
          {this.state.ingData.map((x,y)=>{
              return <div key={y}>
               <p> { x} </p>
              </div>
            })}
               <div>
                 stepe:-
               <p>{this.state.stepsData}</p>
               </div>
            
          </div>
        }
      </div>
      )
    }
    }
    export default Recipe