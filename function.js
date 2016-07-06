function longestString(a,b){
     var strArray=[a, b];
     strArray.sort (function compare(a,b){
    if (a.length>b.length){
       return -1;
   }else if(a.length<b.length){
       return 1;
   }else{
        return 0;
 }
     }
   )
   return strArray;
 }
console.log(longestString("a", "ba"));
    