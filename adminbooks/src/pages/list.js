import React,{Component} from 'react';
import Store from './store/store';
import ActionCreator from './store/actionCreator'

class List extends Component{
    render(){
        console.log(this.props.list)
        console.log(this)
        return(
            <div>
                {this.props.list.map((item,index)=>{
                    return (
                        <li key={index}>
                        {item.matter}&emsp;
                        <button onClick={()=>{
                            let action=ActionCreator.delList(index)
                            Store.dispatch(action)
                        }}>del</button>&emsp;
                        {item.isFinish?'已完成':<button onClick={()=>{
                            let action=ActionCreator.upDate(index)
                            Store.dispatch(action)
                        }}>待完成</button>}
                        </li>
                    )
                })}
            </div>
        )
    }
}

export default List