function solution(lines) {

    
    
   let sets = []

    for(let j = 0; j <= lines.length-1; j++){
        let value = []
         for(let i = lines[j][0]; i<=lines[j][1]; i++ ){            
            value.push(i)
        }
        sets.push(value)

    }
  

  // console.log(sets[0].filter(x => sets[1].includes(x)).length-1)

    let A = 0
    
    for(i = 0; i<sets.length-1;i++){


        if(sets[i].filter(x => sets[i+1].includes(x)).length-1>0){
        A += sets[i].filter(x => sets[i+1].includes(x)).length-1}
       console.log(A)
    }
    
    var answer = A;
    
    return answer;
    
}


lines = 		[[-5, 1], [-2, 5]]

solution(lines)