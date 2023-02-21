//정답
function solution(id_pw, db) {

   // let id = Object.fromEntries(id_pw)
   // let data = Object.fromEntries(db)
    var answer = ""
    
    for(i=0; i<db.length;i++){
        if(id_pw[0] == db[i][0] && id_pw[1] == db[i][1]){
            answer = "login"
            break;
        }else if(id_pw[0] == db[i][0] && id_pw[1] != db[i][1]){
    
            answer = "wrong pw"
            break
        }else{
            answer = "fail"
  
        }
        
    }
    return answer
}


var id_pw = ["meosseugi", "1234"]
var db = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]

//console.log(id_pw[0][0] == db[2][0] && (id_pw[0][1] == db[2][1]))
//console.log(db.length)
solution(id_pw,db)