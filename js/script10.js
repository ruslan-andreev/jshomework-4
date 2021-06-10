let arrTask10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    sumTask10 = 0,
    x = arrTask10.indexOf (0),
    y = arrTask10.lastIndexOf(0);
console.log(x);
console.log(y);
if(x > 0 && y > 0){    
    for(i = x; i < y; i++){
        sumTask10 += arrTask10[i];
    }console.log(sumTask10);
}else{
    console.log(0);
}