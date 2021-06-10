let arrTask8 = [12,false,'Текст',4,2,-5,0];

//arrTask8.reverse();
//console.log(arrTask8);

let i = arrTask8.length; 
let popArr = [];
let popElem;
console.log(i);
while(i > 0){
   popElem = arrTask8.pop();
   popArr.push(popElem);
    i--;
}console.log(popArr);
