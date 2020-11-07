import React from 'react';
import ReactDOM from 'react-dom';


import Root from "./Root";


class Root extends React.Component{
    render(){
        return(
            <div>
               <DatePicker/>
            </div>
        );
    }
}

window.onload = () => { 
    ReactDOM.render(<Root/>, document.querySelector("#root")); 

}
