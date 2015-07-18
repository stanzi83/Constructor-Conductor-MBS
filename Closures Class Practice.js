/**
 * Created by Michele on 7/18/2015.
 */

//Closure example: parent function has a child function that it returns. Return function references a variable in its parent scope.
//Maintaining variable references even after their functions are returned.
//function = scope = plate on stack
//context = the 'this' variable
//setTimeout, setInterval, and xhr/http requests are the only built-in asynchronous JS commands
function myFn(){
    var name = 'kurt'

    return function() {
        console.log(name);
    };
}

myFn()();

var User = function(name, age){
    this.name = name;
    this.age = age;
};

var Beth = new User('Beth', 28);

var user = function(name, age){
    var userObj = {};

    userObj.name = name;
    userObj.age = age;

    return userObj;
};

var kat = user('kat', 20);

kat;


var user = function(name, age){
    return{
        name = name;

    }

//variable declaration
var getName = function(){}
}

//function declaration
function getName(){
}