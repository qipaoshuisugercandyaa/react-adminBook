import React,{Component} from 'react';
// import Style from './index.module.less';
import Addbook from '../../components/addmodal/addmodal';
import actionCreator from '../../store/actionCreator';
import Modal from '../../components/modal/modal';
import CustomSlider from '../../components/customSlider/customSlider';
import { Layout, Button,  Dropdown, Icon,Menu,message} from 'antd';
import {withRouter} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
// import {withRouter} from 'react-router-dom';

class Admin extends Component{
    constructor(){
       super();
       this.state={
           isShow:false
       }
    }
    renderMenu=()=>{
      return (
          <Menu>
              <Menu.Item onClick={this.outLogin}>
                  <span>退出</span>
              </Menu.Item>
              <Menu.Item onClick={this.addBook}>
                  <span>添加书籍</span>
              </Menu.Item>
              <Menu.Item onClick={()=>{
                  this.$axios.post('/api/adminbook/root/update',{uid:'5dc241203c569098ec8db4c8',rootLevel:'9'}).then((res)=>{

                  })
              }}>
                  <span>初始化列表</span>
              </Menu.Item>
          </Menu>
      )

    };
    close=()=>{
        this.setState({isShow:false});
    };
    addBook=()=>{
        this.setState({isShow:true});
    };
    addBookList=(data)=>{
        this.setState({isShow:false});
        let bookList=JSON.parse(window.localStorage.getItem('bookList'));
        bookList.unshift(data);
        this.$axios.post('/api/adminbook/root/addbook',{uid:'5dc241203c569098ec8db4c8',bookList}).then((res)=>{
         if(res.err===0){
             message.success('添加成功');
             window.localStorage.setItem('bookList',JSON.stringify(bookList));
             this.props.history.replace('/admin/rootlist');
         }
        });
    };
    // update=()=>{
    //     this.$axios.post('/api/adminbook/root/update',{uid:'5dc12b90ce9fdb22cbb24eb1',rootLevel:'9'}).then((res)=>{
    //         console.log('updata',res);
    //     })
    // }
    outLogin=()=>{
        let uid=JSON.parse(window.localStorage.getItem('uid'));
        this.$axios.post('/api/adminbook/user/logout',{uid}).then((res)=>{
            console.log(res)
            if(res.err===0){
                window.localStorage.removeItem('uid');
                window.localStorage.removeItem('rootList');
                window.localStorage.removeItem('token');
                this.props.history.replace('/login')
            }
        });
    };
    render(){
        let token=window.localStorage.getItem('token');
        return (
         <div>
             <Layout>
                 <Sider
                     style={{
                         overflow: 'auto',
                         height: '100vh',
                         position: 'fixed',
                         left: 0,
                     }}
                 >
                    <CustomSlider></CustomSlider>
                 </Sider>
                 <Layout style={{ marginLeft: 200 }}>
                     <Header style={{ background: '#fff', padding: 0 }} >
                         <Dropdown overlay={this.renderMenu} placement="bottomLeft">
                            <Button >我的</Button>
                         </Dropdown>
                     </Header>
                     <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                         <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                             {this.props.children}
                         </div>
                     </Content>
                     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                 </Layout>
             </Layout>
             <Modal></Modal>
             <Addbook isShow={this.state.isShow} close={this.close} addBookList={this.addBookList}></Addbook>
         </div>
        )
    }
}
export default withRouter(Admin)