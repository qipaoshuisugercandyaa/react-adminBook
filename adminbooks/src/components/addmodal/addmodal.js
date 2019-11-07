import React,{Component,Fragment} from 'react';
import {Card,Button,Input} from 'antd';
import Style from './index.module.less'
class Addbook extends Component{
    render(){
        return (
            <Fragment >
                {this.props.isShow?
                <div className={Style.box}>
                    <Card title='待添加书籍信息' className={Style.card}>
                        <Input placeholder="书籍名称" ref='name'/>
                        <br/>
                        <br/>
                        <Input placeholder="书籍ID" ref='id'/>
                        <br/>
                        <br/>
                        <Input placeholder="书籍数量"  ref='num'/>
                        <br/>
                        <br/>
                        <Button onClick={()=>{
                            let bookName=this.refs.name.state.value;
                            let id=this.refs.id.state.value;
                            let num=this.refs.num.state.value;
                            this.props.addBookList({bookName,id,num});
                        }}>添加</Button>
                        <Button onClick={()=>{
                            this.props.close();
                        }}>关闭</Button>
                    </Card>
                </div>:''}>
            </Fragment>
        )
    }
}
export default Addbook;