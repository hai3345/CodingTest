function solution(s) {
    var x =0;
    var y = 0;
    var current = ""
    var count=0;

    for(i=0;i<s.length;i++){

        if(count == 0){
            answer++;
            current = s[i]
        }


        if(current == s[i]){
            count ++;
        }else{
            count --;
        }

    }


    console.log(answer)
    return answer;
}
var s = "banana"
var answer = 0;
solution(s)