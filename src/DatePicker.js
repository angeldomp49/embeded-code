import React from 'react';
import * as Calendar from "./Constants";
import * as Calculate from "./Calculate";
import DateRemote from "./DateRemote";

class DatePicker extends React.Component{

    state = {
        years: [ 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030 ],
        actualMonth: 0,
        actualYear: 2020,
        daysCalendar: null,
        daysTable2: null,
        connection: new DateRemote(),
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
            fillCalendar: (actualMonth, actualYear, ) => {
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
                            <tr key={index} >{
                                row.map( (col, index) => {
                                    return(<td key={index} className = {""+ ( this.state.daysTable2.days[col].enable ? "" : "disable-element" )}>{col}</td>);
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
                this.setState({ actualYear: e.target.value }, this.state.actions.updateDaysCalendar );
            },
            updateDaysCalendar: (callback = null) => {
                let {actualMonth, actualYear, actions} = this.state;
                this.setState( { daysCalendar: actions.DaysTable(actions.fillCalendar(actualMonth, actualYear)) }, () => { console.log(this.state.daysCalendar); });
                
            },
            testComponent: () => {
                console.log(this.state.actualMonth);
                console.log(this.state.actualYear);
                console.log(this.state.actions.fillCalendar(this.state.actualMonth, this.state.actualYear));
                console.log(this.state.actions.DaysTable(this.state.actions.fillCalendar(this.state.actualMonth, this.state.actualYear)));
            }
        }
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.setState({ daysTable2 : connection.mtGetRemoteDaysTable( { actualMonth: this.state.actualMonth, actualYear: this.state.actualYear } ) });
        this.state.actions.updateDaysCalendar(() => { console.log(this.state.daysCalendar); });
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