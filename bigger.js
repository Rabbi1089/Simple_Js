const Prompt = ('prompt-sync')();

function whoIsbigger (num1, num2, num3){
    console.log(num1,num2,num3)
    if (num1 >= num2 && num1 >= num3)
    {
        console.log(num1 +' is higest number')
    }
    if (num2 >= num1 && num2 >= num3)
    {
        console.log(num2 +' is higest number')
    }
    
    if (num3 >= num2 && num3 >= num1)
    {
        console.log(num3 +' is higest number')
    }
}

whoIsbigger(15,7,9)

const max = math.max(78,5);
console.log(max);