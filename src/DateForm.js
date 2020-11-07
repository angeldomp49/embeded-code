import React from "react";

class DateForm extends React.Component{

    render(){
        return(
            <form action = "/appointment" method = "post" className = { this.props.className } >
                {this.props.children}
                <div className = "date-input" onClick = { () => { this.props.activateDatepicker(); } } ></div>
                <input type = "hidden" value = "" />
                <button type = "submit" className = "" >Submit</button>
                <button type = "reset" className = "" >Reset</button>
            </form>
        );
    }
}

export default DateForm;