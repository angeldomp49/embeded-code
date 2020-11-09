import { connect } from "http2";
import "whatwg-fetch";

class DateRemote {

    /* Don't call this function, this is example code */
    exampleCode(){

        //asynchronus code

        let resp = null;

        fetch("http://localhost/json/data.json", {
            'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
        })
        .then( ( response ) => {
            return response.json();
        } )
        .then( (data) => {
            resp = data;
            console.log("inside fetch: "+resp);
        } )
        .catch( ( error ) => {
            console.log("error: "+error);
        } );

        console.log("outside fetch: "+resp);

        // synchronus code

        let firstPromise = await fetch("http://localhost/json/data.json", {
            'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
        });

        let secondPromise = await firstPromise.json();
        console.log(secondPromise);

        // pure javascript async code

        let  connection = new XMLHttpRequest();
        let resp = null;

        connection.open("GET", "http://localhost/json/data.json");
        //connection.setRequestHeader('Access-Control-Allow-Origin', '*');

        connection.onreadystatechange = () => {
            if(connection.status == 200){
                console.log(connection.response);
                return;
            }
        }

        connection.send();
        console.log(resp);
        

        //sync code

        let  connection = new XMLHttpRequest();
        connection.open("GET", "http://localhost/json/data.json", false);
        connection.send();
        if(connection.status == 200 ){
            console.log(connection.response);
        }
    }

    async mtGetRemoteDaysTable( actualMonthYear ){
        let response = await fetch("http://localhost/date-picker/", {
            method : "POST",
            mode   : "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body   : JSON.stringify(actualMonthYear)
        });
        let result = await response.json();
        console.log(result);
        return result;
    }
}

export default DateRemote;