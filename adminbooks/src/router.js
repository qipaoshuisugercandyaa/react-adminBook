import React,{Component} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Loadable from '../src/utils/loadable';
const Login=Loadable(()=>import('./pages/login/login'));
const Admin=Loadable(()=>import('./pages/admin/admin'));
const BookList=Loadable(()=>import('./pages/admin/rootlist'));
const LookBook=Loadable(()=>import('./pages/admin/booklist'));
const BookNum=Loadable(()=>import('./pages/admin/booknum'));
const Home=Loadable(()=>import('./pages/admin/home'));
class RootRoute extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/login"></Redirect>
                    <Redirect exact from="/admin" to="/admin/home"></Redirect>
                    <Route  path='/admin' component={()=>{
                        return (
                            <Admin>
                                {/*<Route  path='/admin/user' component={User}></Route>*/}
                                <Route  path='/admin/home' component={Home}></Route>
                                <Route path='/admin/bookList' component={LookBook}></Route>
                                <Route path='/admin/rootlist' component={BookList}></Route>
                                <Route path='/admin/percentage' component={BookNum}></Route>
                                {/*<Route path='/admin/advertising' component={Files}></Route>*/}
                            </Admin>
                        )
                    }}></Route>
                    <Route path='/login' component={Login}></Route>
                    {/*<Route path='/admin' component={Admin}></Route>*/}
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute