// Code your solution in this file!
function returnFirstTwoDrivers(array){
    return array.slice(0, 2);
    
}
function returnLastTwoDrivers(array){
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(tin){
    return function(date){
        return tin * date;
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, functions){
    return functions(arrayOfDrivers); 
}