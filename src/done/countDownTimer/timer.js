import React,{Component} from "react"
class Timer extends Component {
    state = {
        value:"",
        data:[],
        countDown:[]
    }

  
    handleInput = e => {
        let value = e.target.value
        this.setState({value})
    }

    handleClick= () => {
        this.setState({data:this.state.value})
        setInterval(() => {
            var int = parseInt(this.state.data)
            for(var i=1;i<=int;i++){
                
                this.setState({ data: i-1 });
            }
            },1000); 
            this.setState({value:""})

           
        }
    
    render(){
        return( 
        <div> 
            <div>
                <input type="number" value={this.state.value}  onChange={this.handleInput} ></input >
                <button onClick={this.handleClick}>Start</button>
                { this.state.data}
                {this.state.countDown}
            </div>
        </div>
        )
    }
}
export default Timer