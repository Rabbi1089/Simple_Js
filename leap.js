function isLeapyear (year){
    if (year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

const isyr = isLeapyear(2054);
console.log(isyr)