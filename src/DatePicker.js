import React from 'react';

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
        rowsCalendar: [],
    };

    constructor(props){
        super(props);

        

         this.prevMonth = this.prevMonth.bind(this);
        // this.prevMonth = this.prevMonth.bind(this);
        // this.fillDays  = this.fillDays.bind(this);
    }

    render(){

        return(
        <div>
            <form>
                <div className="mt_ec_dp_form_section">
                    <button onClick={()=>{this.prevMonth();}}>prev</button>
                    <label>{this.state.monthNames[this.state.actualMonth]}</label>
                    <select name="mt_ec_dp_year">
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

const prevMonth = () => {
    if( this.state.actualMonth == 0 ){
        this.setState({ actualMonth: 11 });
    }
    else{
        this.setState({ actualMonth: this.state.actualMonth-1 });
    }
}

function nextMonth(){
    if( this.state.actualMonth == 11 ){
        this.setState({ actualMonth: 0 });
    }
    else{
        this.setState({ actualMonth: this.state.actualMonth+1 });
    }
}

function selectDay(numberDay){

}

function fillDays(){
    let i = 1;
    let rows = [];

    while(i<= this.state.daysForMonth[this.state.actualMonth]){
        let cols = [];
        for(k=1;k<=7;k++){
            cols.push(i);
            if(i >= this.state.daysForMonth[this.state.actualMonth]){
                break;
            }
            i++;
        }
        rows.push(cols);
    }
    this.setState({rowsCalendar: rows});
}

const DaysTable = () => {
    this.fillDays();

    return(
        this.state.rowsCalendar.map( (row,index) => {
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
}

export default DatePicker;