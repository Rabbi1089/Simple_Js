
function monthlySavings(credit, debit){
    if(Array.isArray(credit) || typeof debit === 'number'){
        
let sum = 0;
for (let i = 0; i < credit.length; i++) {
  sum += credit[i];
}
let current = 0;
if(sum >= 3000 ){
   current =  sum - (sum * (20/100));
    let savings = current - debit;
if(savings > 0){
    return savings;
}else{
   return 'Earn more'
}
}
}else{
    return 'invalid input'
}
}