import React,{Component,Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
// const root=JSON.parse(window.localStorage.getItem('rootList'))
// const root=[
//     {
//         name:'信息管理',
//         path:'/admin/home',
//         key:'/admin/home',
//         children:[
//             {
//                 name:'商品管理',
//                 path:'/admin/goods',
//                 key:'/admin/goods'
//             },
//             {
//                 name:'菜单管理',
//                 path:'/admin/menu',
//                 key:'/admin/menu'
//             },
//         ]
//     },
//     {
//         name:'用户管理',
//         path:'/admin/user',
//         key:'/admin/user'
//     },
//
// ];
class CustomSlider extends Component{
    constructor(){
        super();
        this.state={
            rootList:[]
        }
    }
    jump(path){
        this.props.history.push(path)
    }
  renderItem(data){
        return data.map((item,index)=>{
            if(item.subprime){
                return (
                    <SubMenu title={item.name}>
                        {this.renderItem(item.subprime)}
                    }
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item  onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                )
            }
        })
  }
    render(){
        let root=window.localStorage.getItem('rootList');
        return (
            <Fragment>
                <Menu style={{ width: 256 }} mode="vertical" theme='dark'>
                    {this.renderItem(JSON.parse(root))}
                </Menu>
            </Fragment>
        )
    }
}
export default withRouter(CustomSlider)