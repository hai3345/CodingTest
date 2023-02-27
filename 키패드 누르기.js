//실패
function solution(numbers, hand) {
 
    var left = [1,4, 7]
    var right = [3, 6, 9]
    
    var answer = ""
    var lastL = 0;
    var lastR = 0;

    /*
    var a = numbers.indexOf(0)
    numbers[a] = 10;
    console.log(numbers)*/
    for(i = 0; i<numbers.length;i++)
        if(left.indexOf(numbers[i]) != -1 ){
            console.log("left1",numbers[i])
            answer = answer+"L"
            lastL = numbers[i]
        }else if(right.indexOf(numbers[i] )!= -1 ){
            console.log("right1",numbers[i])
            answer = answer+"R"
            lastR = numbers[i]
        }else if(numbers[i] == 0){numbers[i] == 10}
        else if(Math.abs(numbers[i]-lastL)>Math.abs(numbers[i]-lastR)){
            //console.log("left",Math.abs(numbers[i]-lastL),"right",Math.abs(numbers[i]-lastR),"lastL: ",lastL,"lastR: ",lastR)

            answer = answer+"R"
            lastR = numbers[i]
            console.log("R2",numbers[i])
        }else if(Math.abs(numbers[i]-lastL)<Math.abs(numbers[i]-lastR)){
            answer = answer+"L"
            lastL = numbers[i]
            console.log("L2",numbers[i])
        }else if(hand == right){
            answer = answer+"R"
            lastR = numbers[i]
            //console.log("rightHand")
            console.log("R3",numbers[i])
        }else{
            answer = answer+"L"
            lastL = numbers[i]
            //console.log("LeftHand")
            console.log("L3",numbers[i])
        }
 
    console.log(answer);
    return answer;
}


var test = [1]
var numbers = 	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
var hand = "left"


solution(numbers, hand)