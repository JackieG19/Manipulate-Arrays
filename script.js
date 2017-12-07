//Manipulate Arrays With push 

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); 

output:
myArray = [["John", 23], ["cat", 21], ["dog", 3]];


//Manipulate Arrays With pop 

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

output:
myArray = [["John", 23]] &
removedFromMyArray = ["cat", 2]


//Manipulate Arrays With shift 

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();

output:
myArray = [["dog", 3]]
removedFromMyArray = ["John", 23]


//Manipulate Arrays With unshift

var myArray = [["John", 23], ["dog", 3]];
myArray.shift("John", 23);
myArray.unshift(["Paul", 35]);

output:
myArray = [["Paul", 35], ["dog", 3]];



