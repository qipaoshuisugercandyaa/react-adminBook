import React,{Component} from 'react';
// import {} from 'react-redux';
import State from './store/state';

import Input from './input';
import List from './list';
import store from './store/store';

class Box extends Component{
    constructor(){
        super()
        this.state=State
    }
    componentDidMount(){
        console.log('监听全局状态值改变')
        store.subscribe(()=>{
            this.setState({})
        })
        console.log(this.state)
    }
    render(){
        let {list}=this.state;
        console.log(list)
        return(
            <div>
                <Input></Input>
                <hr/>
                <List list={list}></List>
            </div>
        )
    }
}

export default Box