function feetToinch (height){

    feet = parseInt(height /12);
    inch = height % 12;
    const Height = 'your height is ' + feet + ' feet and ' + inch + ' inch';
    return Height;
}

const your_height =  feetToinch(67);
console.log(your_height);

function k2m(mile){
    const mile = mile * 1.6;
    return mile;
}

const km =  k2m(785);
console.log(km);


