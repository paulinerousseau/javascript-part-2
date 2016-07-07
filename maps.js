function Tile (type){
    this.type = "type";
    
}
Tile.isWalkable = function (){
    if (this.type === "grass"){
        return true;
        }else if (this.type ==="sand"){
            return true;
        }else{
            return false;
        }
};

function Map (width,height){
    this.height = height;
    this.width = width;
    var mapArray = [[],[]];
    var tileTypeArr = ["sand","grass","water"]    
        
        
        //selecting the right position in 2D mapArray
        for (var i=0; i<this.height; i++){
            for (var j=0; j<this.width; j++){
                
                // creating tile and save it in array
                var randomNumber = Math.floor((Math.random() * tileTypeArr.length)+1);
                var a = Tile (tileTypeArr[randomNumber]);
                mapArray[i][j].push(a);
                
        }
      }
    
    map.getWalkableOutput
    
}