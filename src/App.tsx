import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {RootStateType} from "./Redux/State";


const App = (props:{ state: RootStateType}) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path='/profile' render={()=> <Profile state={props.state.profilePage} />}/>
                  <Route path='/dialogs' render={()=> <Dialogs state={props.state.dialogsPage} />}/>
                  <Route path='/news' render={()=> <News />}/>
                  <Route path='/music' render={()=> <Music />}/>
                  <Route path='/settings' render={()=> <Settings />}/>
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
