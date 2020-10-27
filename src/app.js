import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class Root extends React.Component{



    render(){
        testingPromises();
        return(
            <div>
               <p>Hola mundo</p>
            </div>
        );
    }
}

window.onload = () => { ReactDOM.render(<Root/>, document.querySelector("#root")); }

function testingPromises(){
    return new Promise( (resolve, reject) => {
        var changeResult = true;
        return changeResult ? resolve(true) : reject(error);
    } );
}

testingPromises()
.then( (success) => console.log("first") )
.catch( (error) => console.log("second") );

let info;

fetch("http://localhost/json/data.json", {
    method: 'GET',
    headers: {
        Accept: "application/json"
    }
})
.then( ( response ) => { response.text(); } )
.then( (response) => { console.log(response); info = response; } )
.catch( ( error ) => { console.log(error) } );
