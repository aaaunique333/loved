import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './Container/Home';
import PostView from './Container/PostView';
import Dashboard from './Container/Dashboard.js'
import CreatePost from './Container/Post/CreatePost';
import Login from './Container/Login';
import Update from './Container/update/Update';
import Control from './Container/Control/Control';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from './Actions/login';
function App() {
  const dispath=useDispatch();
  const isLogged=useSelector(state=>state.loginReducer.isLogged);

  useEffect(()=>{
    if(localStorage.getItem('login')==="1"){
        dispath(login());
    }
  },[])
  return (
    <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/post-view/:id">
                  <PostView />
                </Route>
                <Route path="/upload">
                    {isLogged ? <CreatePost /> :<Home />}
                </Route>
                <Route path="/login">
                 {!isLogged ? <Login /> :<Home />}
                </Route>
                <Route path="/dashboard">
                   {isLogged ? <Dashboard /> : <Home />}
                </Route>
                <Route path="/update">
                   {isLogged ?  <Update /> :<Home />}
                </Route>
                <Route path="/control">
                  {isLogged ?  <Control /> : <Home />}
                </Route>
            </Switch>
            
    </Layout>
  );
}

export default App;
