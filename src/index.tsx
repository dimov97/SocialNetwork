import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/State";


let rerenderEntireTree = ()=> {
    ReactDOM.render(<App state={store.getState()}
                         addPost={store.addPost.bind(store)}
                         changeNewTextCallback={store.changeNewText.bind(store)}
    />, document.getElementById('root'));
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)