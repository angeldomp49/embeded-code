import * as Calendar from "./Constants";

export function alwaysWeekDay(day){
    return ( day >= 7 ) ? day - 7 : day;
}

export function isLeapYear(year){
    return ( (year % 4) == 0 ) ? true : false;
}

export function firstWeekDayYear(year){

    let offset = Calendar.FIRST_DATE.WEEK_DAY;
    for(let i = Calendar.FIRST_DATE.YEAR; i < year; i++){
        offset++;
        if( isLeapYear(i) ) offset ++;
        offset = alwaysWeekDay(offset);
    }

    return offset;
}

export function firstWeekDayMonth(month, year){

    let firstDay = firstWeekDayYear(year);

    for(let i = 0; i < month; i++){
        if( i == 1 && isLeapYear(year) && month > 1 ){
            firstDay++;
        }
        firstDay += (Calendar.MONTHS[i].DAYS - 28 );
        firstDay = alwaysWeekDay(firstDay);
    }

    return firstDay;
}

export function fillCalendar(actualMonth, actualYear){
    let i = 0;
    let dayMonth = 1;
    let rows = [];

    const numberDays = Calendar.MONTHS[actualMonth].DAYS;
    const offset = firstWeekDayMonth(actualMonth, actualYear);
    let totalBoxes = (numberDays + offset) - 1; 

    if( isLeapYear(actualYear) && actualMonth == 1){
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
}