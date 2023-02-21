/*function solution(numlist, n) {

    let dic = {}
    let list = []
    let answer = []
    let dic2 = {}

    for( i=0; i<numlist.length;i++){
        dic[i] = numlist[i]      
        
     

        dic2[i] = Math.abs(n - numlist[i])
        // list.push((Math.abs(n - numlist[i])))        
        
    }
 
    let sort = Object.entries(dic2).sort((a,b) => a[1] -b[1]);
   
   console.log(dic)

    return answer;
}*/

function solution(numlist, n) {
    numlist.sort((a,b)=>{
        let n1 = Math.abs(a-n),
            n2 = Math.abs(b-n);
            console.log("a :",a)
            console.log("b :",b)
        return n1 < n2 ? -1 :
               n1 === n2 ?( a < b ? 1 : -1) : 1;
    });
    return numlist;



}


let numlist = [10000,20,36,47,40,6,10,7000];
let n = 30

solution(numlist,n)