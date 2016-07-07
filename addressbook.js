function person (firstName,lastName){
    this.firstName = "first";
    this.lastName = "last";
    this.emails = []
}

function email (address, type){
    this.address = email; 
    if (type ==="work"){
        this.type = "work"; 
        
    }else if(type ==="home"){
        this.type==="home;"
    
        }else{
            this.type==="other";
        }
    };
        
        

    
}

person.prototype = {
    addEmail: function (email, type){
        this.email.push(new Email(email,type));
    }
};

var pau = new person ("pau","rou");
pau.addEmail ("pau@hotmail.com", "work");
console.log (pau);
 

