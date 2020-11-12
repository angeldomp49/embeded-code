import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from './DatePicker';


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
