import React, {Component} from 'react';

class CounterComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.count!==nextState.count){
            return true;
        }
    }

    updateCount = () => {
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("Counter Component");
        return(
            <button color={this.props.color} onClick={this.updateCount} >
                Count:{this.state.count}
            </button>
        )
    }
}

export default CounterComponent;
