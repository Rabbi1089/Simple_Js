
let unSorted = [1 , null, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

function printTypeOfElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number'){
            //let filterd = [];
            for (arrires of arr){
                console.log(arrires);
            }
            //number.push(arr[i]);
            return arrires;
        }
      console.log(typeof arr[i]);
    }
  }
  
  const result = printTypeOfElements(unSorted);
  console.log(result)
  





    