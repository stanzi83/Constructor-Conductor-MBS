//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        alert(this.name);
    };
}

//Now create three instances of Person with data you make up

  //code here
var Kate = new Person('Kate', '33');

var Ben = new Person('Ben', '32');

var Brin = new Person('Brin', '30');

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Kate.sayName();
Ben.sayName();
Brin.sayName();
