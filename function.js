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


//array of objects

var person1 = {
    name : "pau",
    mail :"clemclem"
}
var person2 = {
    name : "mummy",
    mail : "rousseaueli"
}
var objects=[person1, person2];

objects.sort(function(person1, person2){
              
    if (person1.name.length>person2.name.length){
       return 1;
   }else if(person1.name.length<person2.name.length){
       return -1;
   }else{
        return 0;
       
 }
   })           
 console.log(objects);
 
 objects.sort(function(person1, person2) {
      if (person1.mail>person2.mail){
       return -1;
   }else if(person1.mail<person2.mail){
       return 1;
   }else{
        return 0;
       }
   })

console.log(objects);
 
 
//square 
var numbers = [1,9,7];
var sq = numbers.map(function(num){
    return num*num;
    
});

console.log(sq);

//square object

var obj = [{value:4}, {value:6}, {value:8}]
var sq = obj.map(function(obj){
    return obj.value*obj.value;
    
});

console.log(sq);





 
 
 
   