
function oddAverage(numbers){
    const odd = [];
    for (const Number of numbers)

    if ( Number % 2 === 1 ) {
        //console.log(Number)
        odd.push(Number);
    }
    console.log(odd);
    
    let sum = 0;
    for (const numb of odd ){
        sum = sum + numb;
        
    }
    const count = odd.length;
    
    const aver = sum / count;
    console.log(aver);
}

const number = [42,13,58,65,591,96,7];
const average = oddAverage(number);

// let sum = 0;
// for (const odds of odd ){
//     console.log(odds)
// }