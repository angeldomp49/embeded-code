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
                    let { ...rest } = this.state.members;
                    let { active, ...rest2 } = this.state.members.datePicker;
                    this.setState({
                        members: {
                            rest,
                            datePicker:{
                                rest2,
                                active: !active
                            }
                        }
                    }, () => { console.log(this.state.members.datePicker.active);});
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
                <DatePicker className = "" active = { this.state.members.datePicker.active } />
            </div>
        );
    }

}

export default Root;