import React,{Component,Fragment} from 'react';
import actionCreator from '../../store/actionCreator';
import {Card} from 'antd';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';


import Style from './index.module.less'
class Modal extends Component{
    render(){
        let {tokenModal}=this.props;
        return (
            <Fragment>
                {tokenModal? '':<div className={Style.box}>
                    <Card title='确实token' className={Style.card}>
                        <h3>token失效请重新登录</h3>
                        <button onClick={()=>{
                            this.props.history.replace('/login');
                        }}>重新登录</button>
                    </Card>
                </div>}
            </Fragment>
        )
    }
}
export default connect(state=>state)(withRouter(Modal));