import React from 'react';
import * as Calendar from "./Constants";
import * as Calculate from "./Calculate";

class DatePicker extends React.Component{

    state = {
        years: [
            2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030
        ],
        monthNames: [
            "enero","febrero","marzo","abril",
            "mayo","junio","julio","agosto",
            "septiembre","octubre","noviembre","diciembre"
        ],
        dayWeekName: [
            "lunes","martes","miercoles",
            "jueves","viernes","sabado","domingo"
        ],
        daysForMonth: [
            31,28,31,30,31,30,31,31,30,31,30,31
        ],
        actualMonth: 0,
        rowsCalendar: () => {
            let i = 1;
            let dayMonth = 1;
            let rows = [];
            const numberDays = Calendar.MONTHS[this.state.actualMonth].DAYS;
            const offset = Calculate
            .firstWeekDayMonth(this.state.actualMonth, document.getElementById("mt_ec_dp_year").value);
            const totalBoxes = numberDays + offset;
        
            while(i < totalBoxes){

                let cols = [];
                for(let k=1;k<=7;k++){

                    if( i <= offset ){
                        cols.push();
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
            }
            return rows;
        },
        actions:{
            prevMonth: () => {
                if( this.state.actualMonth == 0 ){
                    this.setState({ actualMonth: 11 });
                }
                else{
                    this.setState({ actualMonth: this.state.actualMonth-1 });
                }
            },
            nextMonth: () => {
                if( this.state.actualMonth == 11 ){
                    this.setState({ actualMonth: 0 });
                }
                else{
                    this.setState({ actualMonth: this.state.actualMonth+1 });
                }
            },
            fillDays: () => {
                let i = 1;
                let rows = [];
                const numberDays = Calendar.MONTHS[this.state.actualMonth].DAYS;
            
                while(i < numberDays){
                    let cols = [];
                    for(let k=1;k<=7;k++){
                        cols.push(i);
                        if(i >= numberDays){
                            break;
                        }
                        i++;
                    }
                    rows.push(cols);
                }
                this.setState({rowsCalendar: rows});
            },
            DaysTable: () => {
                return(
                    this.state.rowsCalendar().map( (row,index) => {
                        return(
                            <tr key={index}>{
                                row.map( (col) => {
                                    return(<td key={col}>{col}</td>);
                                } )
                            }
                            </tr>
                        );
                    } )
                );
            },
            selectDay: (numberDay) => {

            }
        }
    };

    constructor(props){
        super(props);
    }

    render(){

        return(
        <div>
            <form>
                <div className="mt_ec_dp_form_section">
                    <button onClick={()=>{this.prevMonth();}}>prev</button>
                    <label>{this.state.monthNames[this.state.actualMonth]}</label>
                    <select name="mt_ec_dp_year" id="mt_ec_dp_year">
                        {
                            this.state.years.map((year)=>{
                                return(
                                <option key={year} value="{year}">{year}</option>
                                );
                            })
                        }
                    </select>
                    <button onClick={()=>{this.nextMonth();}}>next</button>
                </div>
                <div className="mt_ec_dp_form_section">
                    <table>
                    <thead><tr>{this.state.dayWeekName.map( day => {return(<td key={day}>{day}</td>);} )}</tr></thead>
                    <tbody>
                        {
                            this.state.actions.DaysTable()
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