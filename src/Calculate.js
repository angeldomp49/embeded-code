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
    }
    offset = alwaysWeekDay(offset);

    return offset;
}

export function firstWeekDayMonth(month, year){

    let firstDay = firstWeekDayYear(year);

    for(let i = 0; i < month; i++){
        firstDay += (Calendar.MONTHS[i].DAYS - 28 );
    }

    if( isLeapYear(year) && month > 1 ){
        firstDay++;
    }

    firstDay = alwaysWeekDay(firstDay);
    return firstDay;
}