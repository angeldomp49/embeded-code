import React from "react";

import DateForm from "./DateForm";
import DatePicker from "./DatePicker";

class Root extends React.Component{

    state = {
        members: {
            datePicker: {
                active: false,
            },
        },
        methods: {
            datePicker: {
                activate: () => {
                    let { active } = this.state.members.datePicker;
                    active = !active;
                },
            },
        },
    }

    render(){
        return(
            <div>
                <DateForm className = "" activateDatepicker = { this.state.methods.datePicker.activate } >
                    <input type = "text" name = "name" placeholder = "name" />
                </DateForm>
                <DatePicker active = {this.state.members.datePicker.active} />
            </div>
        );
    }

}

export default Root;