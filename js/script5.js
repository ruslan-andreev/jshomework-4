let arrDay = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

for(i = 0; i < arrDay.length; i++){
    if(i < 5){
        document.write(arrDay[i] + ' ');
    }else if(i >= 5){
        //document.write('<b>' + arrDay[i] + '</b>' + ' ');
        document.write(arrDay[i].bold()+ ' ');
    }
}