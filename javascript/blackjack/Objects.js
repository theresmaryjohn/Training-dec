//Intro to Objects
//store data-complex data type
//key-value pairs
let course={
    title:"Learn CSS Grid for free",
    lessons:16,
    creator:"Per Harald Borgan",
    length:63,
    level:2, //levels are usually represented as 0-3,here the course is intermediate so 2
    isFree:true,
    tags:["html","css"]
}
console.log(course.lessons);
//Method of an Object-functions inside object
let player={

    name:"per",
    chips:"200",
    sayHello:function(){
        console.log("Heisann");
    }
}
player.sayHello()
//this is of the form object.method and console.log()is the same thing and also get.elementbyid( )