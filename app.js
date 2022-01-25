var myName = "Maggie";

const numberStates = 50;

var num=(4+5);
console.log(num);

//addin 4 + 5

function sayHello() {
    alert("Hello World!");
}
sayHello()

var person = checkAge("Charles", 21);
var person = checkAge("Abby", 27);
var person = checkAge('James', 18);
var person = checkAge('John', 17);


function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you're not allowed to view this page!");
    }
};


var veggies = ['Brussles', 'Broccoli', 'Peas', 'Asparagus'];
for (i=0; i<veggies.length; i++) {
    console.log(veggies[i]);
}

var pet = {
    name: "Oliver",
    breed: "Feral",
}
console.log(pet.name,pet.breed);


 
var myArray = [
    {name: 'maggie',
        age: 40
        },
    {name: 'Stewart',
        age: 15
        },
    {name: 'Cat',
        age: 45
    },
    {name: 'Robert',
        age: 19
    },
    {name: 'Zach',
        age: 22
    }
    
];

for (i=0; i<myArray.length; i++)
checkAge(myArray[i].name, myArray[i].age);



function getLength(string) {
    return string.length; 
    
}

var num = getLength('Hello World');

   
 if(num % 2 == 0) {
       console.log('The world is nice and even!');
   } else {
       console.log('The world is an odd place!');
   }
    
    





















