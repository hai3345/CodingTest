function solution(board, moves) {
        var boardLength = board.length
        var arr =""
        var answer = 0;
        
        for(i=0;i<moves.length;i++){            
           for(j=0;j<boardLength;j++)
             if(board[j][moves[i]-1] != 0){
                arr = arr + board[j][moves[i]-1];
                board[j][moves[i]-1] = 0;
                if(arr[arr.length-1] == arr[arr.length-2] && arr.length>0){
                    arr = arr.slice(0,arr.length-2);
                    answer+=2;
                }
                break;
      }    
    }
    console.log(answer)
        return answer;
}

var board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
var moves = [1,5,3,5,1,2,1,4]	
/*
var arrr = [1,2,3,4,5,6,7]
console.log(arrr.slice(0,arrr.length-2))
*/
// solution(board,moves)
/*
[0,0,0,0,0]
[0,0,1,0,3]
[0,2,5,0,1]
[4,2,4,4,2]
[3,5,1,3,1]
*/
//433204

var arrr =[]

console.log(arrr.length>0 && arrr[arrr.length-1] ==arrr[arrr.length-2] )