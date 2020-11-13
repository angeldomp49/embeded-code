import React from 'react';
import ReactDOM from 'react-dom';


import Root from "./Root";


class App extends React.Component{
    render(){
        return(
            <div>
               <DatePicker/>
            </div>
        );
    }
}

window.onload = () => { 

    let mt_dp_portals = document.querySelectorAll(".mt_dp_jsportal_dateform");
    mt_dp_portals.forEach( (elem) => {
        ReactDOM.createPortal(<Root/>, elem);
    } );

    ReactDOM.render(<Root/>, document.querySelector("#root")); 

}
