//정답
var arr = []


function solution(score){
    var answer = []
    for( i=0; i<score.length; i++){
       arr.push((score[i][0] + score[i][1])/2)
    }
    
    for(i=0; i<arr.length; i++){
        answer.push(rank(arr[i], arr))
    }
  
    return answer
        
}

function rank(value, arr) {
	const sorted = arr.slice().sort(function(a,b){return b-a});
	const rank = sorted.indexOf(value);
	return (rank < 0)? null : rank+1;
}

var score = 	[[80, 70], [90, 50], [40, 70], [50, 80]]

solution(score)