import React, {Component} from 'react';
import CounterComponent from './CounterComponent';

class Header extends Component{
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextProps,nextState){
        return false;
    }

    render(){
        console.log("Header");
        return(
            <div>
                <CounterComponent color={'red'} />
                <h1 className='f1'>RoboFriends</h1>
            </div>
        )}
}

export default Header;