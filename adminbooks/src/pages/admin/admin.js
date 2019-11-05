import React,{Component} from 'react';
// import Style from './index.module.less';
import actionCreator from '../../store/actionCreator';
import Modal from '../../components/modal/modal';
import CustomSlider from '../../components/customSlider/customSlider';
import { Layout, Button,  Dropdown, Icon,Menu} from 'antd';
import {withRouter} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
// import {withRouter} from 'react-router-dom';

class Admin extends Component{
    renderMenu=()=>{
      return (
          <Menu>
              <Menu.Item onClick={this.outLogin}>
                  <span>退出</span>
              </Menu.Item>
          </Menu>
      )

    }
    outLogin=()=>{
        let uid=JSON.parse(window.localStorage.getItem('uid'));
        this.$axios.post('/api/admin/user/logout',{uid}).then((res)=>{
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
         </div>
        )
    }
}
export default withRouter(Admin)