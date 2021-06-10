let arrTask4 = ['10','20','30','50','235','3000'],
    somestring,
    sumTask4 = 0;
for(i = 0; i < arrTask4.length; i++){
        somestring = arrTask4[i];
    if(somestring[0] == '1' || somestring[0] == '2' || somestring[0] == '5');
        sumTask4 += +arrTask4[i];   
}console.log(sumTask4);