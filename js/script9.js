let arrTask9 =[5,9,21,,,9,78,,,,6];
let counter = 0;

for(i = 0; i < arrTask9.length; i++){
    if(typeof arrTask9[i] == 'undefined'){
        counter++;
    }
}
console.log(counter);