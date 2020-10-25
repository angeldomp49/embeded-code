import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component{
    render(){
        return(
            <div>
               <p>Hola mundo</p>
            </div>
        );
    }
}

window.onload = () => { ReactDOM.render(<Root/>, document.querySelector("#root")); }
