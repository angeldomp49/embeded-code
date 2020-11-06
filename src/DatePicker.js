import React from 'react';
import * as Calendar from "./Constants";
import * as Calculate from "./Calculate";

class DatePicker extends React.Component{

    state = {
        years: [ 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030 ],
        actualMonth: 0,
        actualYear: 2020,
        daysCalendar: null,
        actions:{
            prevMonth: () => {
                if( this.state.actualMonth == 0 ){
                    this.setState({ actualMonth: 11 }, this.state.actions.updateDaysCalendar);
                }
                else{
                    this.setState({ actualMonth: this.state.actualMonth-1 }, this.state.actions.updateDaysCalendar);
                }
            },
            nextMonth: () => {
                if( this.state.actualMonth == 11 ){
                    this.setState({ actualMonth: 0 }, this.state.actions.updateDaysCalendar);
                }
                else{
                    this.setState({ actualMonth: this.state.actualMonth+1 }, this.state.actions.updateDaysCalendar);
                }
            },
            fillCalendar: (actualMonth, actualYear) => {
                let i = 1;
                let dayMonth = 1;
                let rows = [];
                const numberDays = actualMonth.DAYS;
                const offset = Calculate.firstWeekDayMonth(actualMonth, actualYear);
                const totalBoxes = numberDays + offset;
            
                while(i < totalBoxes-1){
    
                    let cols = [];
                    for(let k=1;k<=7;k++){
    
                        if( i <= offset ){
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
                    console.log("rows: "+rows);
                    rows.push(cols);
                }
                return rows;
            },
            DaysTable: (arrayDays) => {
                return(
                    arrayDays.map( (row,index) => {
                        console.log("rows in daysTable: "+row);
                        return(
                            <tr key={index}>{
                                row.map( (col, index) => {
                                    console.log("col in daysTable: "+col);
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
            changeYear(e){
                this.setState({ actualYear: e.target.value }, this.state.actions.updateDaysCalendar );
            },
            updateDaysCalendar(){
                /*
                let {actualMonth, actualYear, actions, fillCalendar} = this.state;
                this.setState( { daysCalendar: actions.DaysTable(fillCalendar(actualMonth, actualYear)) });
                */
               this.setState( { daysCalendar: this.state.actions.DaysTable(this.state.actions.fillCalendar(this.state.actualMonth, this.state.actualYear)) } );
            }
        }
    };

    constructor(props){
        super(props);
        this.state.actions.updateDaysCalendar = this.state.actions.updateDaysCalendar.bind();
    }

    componentDidMount(){
        this.state.actions.updateDaysCalendar();
    }

    render(){

        return(
        <div>
            <form>
                <div className="mt_ec_dp_form_section">
                    <button onClick={(e)=>{ e.preventDefault(); this.state.actions.prevMonth();}}>prev</button>
                    <label>{Calendar.MONTHS[this.state.actualMonth].NAME}</label>
                    <select onChange={ (e) => { this.setState({ actualYear: e.target.value }, this.state.actions.updateDaysCalendar);  } } name="mt_ec_dp_year" id="mt_ec_dp_year"
                    value={this.state.actualYear}>
                        {
                            this.state.years.map((year)=>{
                                return(
                                    <option key={year} value={year}>{year}</option>
                                    );
                            })
                        }
                    </select>
                    <button onClick={(e)=>{ e.preventDefault(); this.state.actions.nextMonth();}}>next</button>
                </div>
                <div className="mt_ec_dp_form_section">
                    <table>
                    <thead><tr>{Calendar.WEEK_DAYS.map( day => {return(<td key={day.ID}>{day.NAME}</td>);} )}</tr></thead>
                    <tbody>
                        {
                            this.state.daysCalendar
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