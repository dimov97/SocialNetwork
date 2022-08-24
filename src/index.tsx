import React from 'react';
import './index.css';
import state, {subscribe} from './Redux/State'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,} from "./Redux/State";


let rerenderEntireTree = ()=> {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
    />, document.getElementById('root'));
}


rerenderEntireTree()
subscribe(rerenderEntireTree)