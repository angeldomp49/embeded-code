import React from 'react';
import ReactDOM from 'react-dom';


import Root from "./Root";

class App extends React.Component{
    render(){

    }
}

window.addEventListener("load", function (){
    ReactDOM.render(<Root/>, document.querySelector("#root"));
}, false);