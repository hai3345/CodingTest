//틀림
function solution(chicken) {
 
    var cupon = 0;
    var totalChicken = 0;
    var Loop = chicken.toString().length 
    
    for(i=0;i<Loop;i++){
        console.log(totalChicken)
        cupon = cupon + chicken%10;
        if(cupon<10){
            totalChicken = totalChicken + parseInt(chicken/10);
        }else{
            totalChicken = totalChicken + parseInt(chicken/10) + parseInt(cupon/10) 
            cupon = parseInt(cupon/10) 
        }
        chicken = parseInt(chicken/10);
    }
    return totalChicken;
}

solution(1999)

//199(9) + 19(+1)(9 + 9 = 8) + 2(8 +2 = 0) 

//108(1) + 10(1+ 8) + 1(+1)(0) = 120
