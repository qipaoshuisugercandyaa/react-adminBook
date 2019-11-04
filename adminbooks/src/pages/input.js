import React,{Component} from 'react';
import ActionCreator from './store/actionCreator';
import Store from './store/store'
import {connect} from 'react-redux'

class Input extends Component{
    render(){
        return(
            <div>
                <input type='text' ref='input' />
                <button onClick={()=>{
                    let value=this.refs.input.value;
                    let action=ActionCreator.addList(value);
                    Store.dispatch(action)
                }}>add</button>
            </div>
        )
    }
}

export default connect(state=>state)(Input)