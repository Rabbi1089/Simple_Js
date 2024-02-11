const fruit = ['fruits' , 'fruits2' , 'fruits3']

for (fruts of fruit){
    console.log(fruts);
}

let num = 0;

while ( num < 20 ){
    console.log('Hello World');
    num = num + 1;
}

let sonkha = 0;
while(sonkha < 20){
    console.log("Songhka will print")
    sonkha++;
}

console.log("================================================")

let name1 = '  Fazla   Rabbi';
let name2 = 'fazla rabbi ';

if(name1.toLowerCase === name2.toLowerCase){
    console.log('they are same')
}else{
    console.log('they are not same')
}

const adress = 'Bharmonbari';
const part = adress.slice(7, 9);
console.log(part);