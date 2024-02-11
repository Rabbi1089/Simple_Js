var input = [1 , null, 18,undefined, -19, NaN, "12", [1, 2], { ob: "lala" }];
var input1 = {num: [ 1 , 2 , 3 ]} ;

function deleteInvalids(array){
    if(Array.isArray(array)){
        var newArray = [];
        for(var i = 0; i<array.length; i++){
        var element = array[i];
        console.log(newArray)
        if(typeof array[i] === 'number'){
        newArray.push(element);
        }

    }
        if (isNaN(array[i])) {
        newArray.pop(element);
        }
    return newArray;
    }else{
        return 'Invalid Array'
    }

}

const result = deleteInvalids(input1)
console.log(result)



//let siteName = obj.siteName.charAt(0).toUpperCase+siteName.slice(1);
//console.log(siteName)

console.log('=====================')
const siteName= obj['siteName'];
const webSiteName = siteName[0].toUpperCase() + siteName.slice(1);
const name= obj['name'];
const userName = name[0].toUpperCase() + name.slice(1);

let password = webSiteName + '#' + userName + '@' + obj['birthYear']

console.log(password);