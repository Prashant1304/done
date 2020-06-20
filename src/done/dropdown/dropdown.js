import axios from "axios"
import React, {Component} from 'react';
// import logo from './logo.svg';
// import Dropdown from "react-dropdown"
// import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            item:[],
            value: "",
            nweTerm:null
        }
    }
    

    // show=props => {
      // const {person} = props
      // }
      
      handleChange = e => {
        var message = e.target.value
        var filter = this.state.list.filter(function(item) {
          return item.language === message;
         });
        this.setState({value:message })
      this.setState({list:filter})
      console.log( message)
    }
    
    onReset = e => {
      // this.setState({value:""})
      // var resetFilter = this.state.list.filter(function(item) {
      //   return item.name;
      // });
      // console.log(resetFilter)
      this.setState({
        list:this.state.item,
        value:""
      })
    }
    
    componentDidMount = () => {
      axios.get('https://api.github.com/users/supreetsingh247/repos').then(res => {
        const list = res.data
        const item = res.data
        this.setState({list,item})
        console.log(this.state.list)
        console.log(this.state.value)
        console.log(this.state.item)
      })
    }
    render() {
      var message = this.state.value
      var filter = this.state.list.filter(function(item) {
        return item.language === message ;
       });
    
      return (
            <div> 
              <select name = "reset" value = {this.state.value} onChange={this.handleChange} onFocus={this.onReset}> 
                <option onClick={this.onReset} value="All">language</option>
                <option className="language_item"  value="JavaScript">javascript</option>
                <option className="language_item" value="HTML">html</option>
                <option className="language_item" value="CSS" >css</option>
            </select>
                <button  onClick = {this.onReset}  > clear
                </button>
                <div> {
                    filter.map(person => <li key={
                        person.id
                    }>
                        {
                        person.language
                    },{
                        person.name
                    }</li>)
                }
                    <input onChange={
                        this.handleChange
                    }></input>
                </div>
            </div>
        )
    }
}

export default App;


