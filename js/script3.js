let arrTask3 = [],
    result = 0;

/*
let index = 23;
while(index <= 53){
    arrTask3.push(index);
    index ++;
}console.log(arrTask3);
*/

for(i = 23 ; i >= 23 && i <=53; i++){
    arrTask3.push(i);
}console.log(arrTask3);

for(i =0 ; i < arrTask3.length ; i++){
    result += arrTask3[i];
}console.log(result);