let arrTask7 = [],
    value;

do{
    value = prompt('Введите число');
    if(value != ''){
        arrTask7.push(+value);  
    }
}while (value != '');
console.log(arrTask7);
arrTask7.sort(function(a,b){
    return a - b;
});
console.log(arrTask7);