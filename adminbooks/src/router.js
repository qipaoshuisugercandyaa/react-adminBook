import React,{Component} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Loadable from '../src/utils/loadable';
const Login=Loadable(()=>import('./pages/login/login'));
const Admin=Loadable(()=>import('./pages/admin/admin'));
const RootList=Loadable(()=>import('./pages/admin/rootlist'));
class RootRoute extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/login"></Redirect>
                    <Route  path='/admin' component={()=>{
                        return (
                            <Admin>
                                {/*<Route  path='/admin/user' component={User}></Route>*/}
                                {/*<Route  path='/admin/home' component={Home}></Route>*/}
                                {/*<Route path='/admin/rootlist' component={RootList}></Route>*/}
                                <Route path='/admin/bookList' component={RootList}></Route>
                                {/*<Route path='/admin/advertising' component={Files}></Route>*/}
                            </Admin>
                        )
                    }}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute