function solution(chicken) {
 
    var cupon = 0;
    var totalChicken = 0;
    var Loop = chicken.toString().length 
    
    for(i=0;i<Loop;i++){
        console.log(totalChicken)
        cupon = cupon + chicken%10;
        console.log("시작전 쿠폰",cupon)
        if(cupon<10){
            
            console.log("이프걸림",totalChicken,parseInt(chicken/10))
            totalChicken = totalChicken + parseInt(chicken/10);
        }else{
            console.log("엘스 걸림",totalChicken,parseInt(chicken/10),parseInt(cupon/10))
            totalChicken = totalChicken + parseInt(chicken/10) + parseInt(cupon/10);
            console.log("엘스 걸린후 토탈치킨",totalChicken)
            cupon = parseInt(cupon/10)
            
        }
        chicken = parseInt(chicken/10);
     
    }
    console.log(totalChicken)
        
    return totalChicken;
}

solution(1999)