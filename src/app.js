import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from './DatePicker';

import {testCalculate} from "../test/Calculate-test";

class Root extends React.Component{
    render(){
        return(
            <div>
               <p>Hola mundo</p>
               <DatePicker/>
            </div>
        );
    }
}

window.onload = () => { ReactDOM.render(<Root/>, document.querySelector("#root")); }
