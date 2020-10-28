import * as Calculate from "../src/Calculate";
import * as Constants from "../src/Constants";

export function testCalculate(){

let a = Calculate.alwaysWeekDay(8);
console.log("Expected 1, returned: "+a);

let b = Calculate.alwaysWeekDay(7);
console.log("Expected 0, returned: "+b);

let c = Calculate.alwaysWeekDay(1);
console.log("Expected 1, returned: "+c);

let d = Calculate.isLeapYear(2004);
console.log("Expected true, returned: "+d);

let e = Calculate.isLeapYear(2007);
console.log("Expected false, returned: "+e);

let f = Calculate.firstWeekDayYear(2000);
console.log("Expected 5, returned: "+f);

let g = Calculate.firstWeekDayYear(2004);
console.log("Expected 3, returned: "+g);

let h = Calculate.firstWeekDayYear(2020);
console.log("Expected 2, returned: "+h);

let i = Calculate.firstWeekDayMonth(5,2010);
console.log("Expected 1, returned: "+i);

let j = Calculate.firstWeekDayMonth(10,2016);
console.log("Expected 5, returned: "+j);

}