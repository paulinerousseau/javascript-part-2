var warriorPrototype = {
    name: null,
    gender: null,
    level: 1,
    weapon: "wooden sword",
    power: null,
    fight: function() {
        console.log(this.name + "rushes to the arena with" + " " + this.weapon);
    },
    faceoff: function(opponent) {
        if (this.power > opponent.power) {
            console.log(this.name + " " + "wins");
        }
        else {
            console.log(this.name + " " + "looses");
        }
    }
}


function Warrior(name, gender) {
    var warrior = Object.create(warriorPrototype)
    if (typeof name === "string") {
        warrior.name = name;
    }
    if (gender === "F" || gender === "M") {
        warrior.gender = gender;
    }

    warrior.power = Math.random() * 100;
    return warrior;
}

var fighter1 = Warrior("pau", "F");
var fighter2 = Warrior("robin", "M");

fighter1.faceoff(fighter2);