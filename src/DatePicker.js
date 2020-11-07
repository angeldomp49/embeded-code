import React from 'react';
import * as Calendar from "./Constants";
import * as Calculate from "./Calculate";

class DatePicker extends React.Component{

    state = {
        members: {
            years: [ 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030 ],
            actualMonth: 0,
            actualYear: 2020,
            daysCalendar: null,
        },
        methods: {
            prevMonth: () => {
                if( this.state.members.actualMonth == 0 ){
                    this.setState({ actualMonth: 11 }, this.state.methods.updateDaysCalendar);
                }
                else{
                    this.setState({ actualMonth: this.state.members.actualMonth-1 }, this.state.methods.updateDaysCalendar);
                }
            },
            nextMonth: () => {
                if( this.state.members.actualMonth == 11 ){
                    this.setState({ actualMonth: 0 }, this.state.methods.updateDaysCalendar);
                }
                else{
                    this.setState({ actualMonth: this.state.methods.actualMonth+1 }, this.state.methods.updateDaysCalendar);
                }
            },
            fillCalendar: (actualMonth, actualYear) => {
                let i = 0;
                let dayMonth = 1;
                let rows = [];

                const numberDays = Calendar.MONTHS[actualMonth].DAYS;
                const offset = Calculate.firstWeekDayMonth(actualMonth, actualYear);
                let totalBoxes = (numberDays + offset) - 1; 

                if( Calculate.isLeapYear(actualYear) && actualMonth == 1){
                    totalBoxes++;
                }
                
                while(i <= totalBoxes){ 
    
                    let cols = [];
                    for(let k=0;k<=6;k++){
    
                        if( i < offset ){
                            cols.push("");
                        }
                        else{
                            cols.push(dayMonth);
                            dayMonth++;
                        }
                        if(i >= totalBoxes){
                            break;
                        }
                        i++;
                    }
                    rows.push(cols);
                    if(i >= totalBoxes){
                        break;
                    }
                }
                return rows;
            },
            DaysTable: (arrayDays) => {
                return(
                    arrayDays.map( (row,index) => {
                        return(
                            <tr key={index}>{
                                row.map( (col, index) => {
                                    return(<td key={index}>{col}</td>);
                                } )
                            }
                            </tr>
                        );
                    } )
                );
            },
            selectDay: (numberDay) => {

            },
            changeYear: (e) => {
                this.setState({ actualYear: e.target.value }, this.state.methods.updateDaysCalendar );
            },
            updateDaysCalendar: (callback = null) => {
                let {actualMonth, actualYear} = this.state.members;
                let {DaysTable, fillCalendar} = this.state.methods;
                this.setState( { daysCalendar: DaysTable(fillCalendar(actualMonth, actualYear)) }, callback);
                
            },
            loadAppointments: () => {

            },
            testComponent: () => {
                console.log(this.state.members.actualMonth);
                console.log(this.state.members.actualYear);
                console.log(this.state.methods.fillCalendar(this.state.members.actualMonth, this.state.members.actualYear));
                console.log(this.state.methods.DaysTable(this.state.methods.fillCalendar(this.state.members.actualMonth, this.state.members.actualYear)));
            }
        },
    };

    constructor(props){
        super(props);


    }

    componentDidMount(){
        this.state.methods.loadAppointments();
        this.state.methods.updateDaysCalendar();
    }

    render(){

        return(
        <div>
            <form className = { ( this.props.className ? this.props.className : "" ) + ( this.props.active ? "active" : "" ) } >
                <div className="mt_ec_dp_form_section">
                    <button onClick={(e)=>{ e.preventDefault(); this.state.methods.prevMonth();}}>prev</button>
                    <label>{Calendar.MONTHS[this.state.members.actualMonth].NAME}</label>
                    <select onChange={ (e) => { this.setState({ actualYear: e.target.value }, this.state.methods.updateDaysCalendar);  } } name="mt_ec_dp_year" id="mt_ec_dp_year"
                    value={this.state.members.actualYear}>
                        {
                            this.state.members.years.map((year)=>{
                                return(
                                    <option key={year} value={year}>{year}</option>
                                    );
                            })
                        }
                    </select>
                    <button onClick={(e)=>{ e.preventDefault(); this.state.methods.nextMonth();}}>next</button>
                </div>
                <div className="mt_ec_dp_form_section">
                    <table>
                    <thead><tr>{Calendar.WEEK_DAYS.map( day => {return(<td key={day.ID}>{day.NAME}</td>);} )}</tr></thead>
                    <tbody>
                        {
                            this.state.members.daysCalendar
                        }
                    </tbody>
                    </table>
                </div>
                <div className="mt_ec_dp_form_section">

                </div>
            </form>
        </div>
        );
    }
}

export default DatePicker;