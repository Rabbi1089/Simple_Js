var input = [1 , null, 18,undefined, -19, NaN, "12", [1, 2], { ob: "lala" }];
// var unique = [];
// for(var i = 0; i<nums.length; i++){
//     var element = nums[i];
//     if(typeof nums[i] === 'number'){
//         unique.push(element);
//     }
// }
// console.log("Unique array is: ", unique);

function deleteInvalids(array){
    var newArray = [];
    for(var i = 0; i<array.length; i++){
    var element = array[i];
    if(typeof array[i] === 'number'){
        newArray.push(element);
    }
}

}

const result = deleteInvalids(input)
console.log(result)