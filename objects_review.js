// POJO
// plain old javascript object

// An object is an unordered collection of properties, 
// each of which has a name and a value. Property names
// are usually strings (though symbols can be used) =>
//      (came with ES6) Symbols serve as a non-string 
//      property name. You can add properies to object without worrying of overriding 
//      another proper or adding in the same property name. The Symbol() function
//      never returns the same value twice. -- look into this later

// So other than the Symbol() objects map strings to values.
// String-to-value is also called => "hash", "hashtable", "dictionary" or "associative array"
// However , in addition to maintaining its own set of properties, a javascript object 
// also inherits the propeties of another object, known as its "prototype".
// The methods of an object are typically inherited properties, and this is key
// feature in javascript: "prototypal inheritence"
// anything that is NOT => "a string", "a number", "a Symbol" or "true, false, null, undefined", is an object!
// even though thoise things above listed there are not objects
// they can be made to behave like immutable objects

// Objects are mutable and manipulated by reference rather than value.
// x refers to an object => let y = x;
// variable y holds a reference to the same object, not a copy of that object.
// Any modifications made to that object through the variable y,
// are also visible through the variable x.

// Objects are normally used in accordence:
// create them and set
// query,
// delete,
// and enumerate their properites.

// A property has a name and a value.No object may have two properties with the same name.
// Javascript uses the term OWN PROPERTY to refer to non-inherited properties.

// In addition to its name and value, each property has three PROPERTY ATTRIBUTES:
// - the writable attribute specifies wether that value of the property can be set.
// - the enumerable attribute specifies wether the property name is returned by a for/in loop.
// - the configurable attribute specifies whether the property can be deleted and whether its attributes can be altered.

// Many Javaascript built-in objects have properties that are read-only, non-enumerable, or non-configurable. The objects
// you create are writable, enumerable, and configurable!

// Objects can be created with an Object Literal, the NEW keyword, and the Object.create()

let empty = {};
let point = { x: 0, y: 0 };
let p2 = { x: point.x, y: point.y };
let book = {
    "main title": "Malazan Book Of The Fallen",
    "sub-title": "Book One",
    for: "mature audiences",
    author: {
        firstname: "Steven",
        surname: "Eriksson"
    }
}

let o = new Object; // prototypal inheritance is from Object.prototype // Object.prototype  is one of the rare
// cases where it does not have a prototype.
let a = new Array(); // prototypal inheritance is from Array.prototype
let d = new Date(); // prototypal inheritance is from Date.prototype
let r = new Map(); // prototypal inheritance is from Map.prototype

console.log(book.valueOf());

console.log(book.hasOwnProperty("main title"));

console.log(book.constructor);
// "Object() { [native code] }"

// now more on prototypes =>
// Almost every object has a second javascript object assiociated with it.
// This second object is known as a prototype,
// the first object inherits properties from the prototype.
// All objects created by object literals have the same prototype object, and
// in javascript it can be refered to by Object.protoype
// Objects created by the NEW keyword and a constructor invocation use the value of
// the prototype property of the constructor function as their prototype.
// The Date.prototype inhereites properties from Object.prototype,
// this is called => "prototype chaining"

// creating a new object with Object.create()

// creates a new object useing its first argument as the prototype of that object
let o1 = Object.create({x:1,y:2});
// o1 inherits properties x and y
console.log(o1.x + o1.y);

// you can use null to create an object without a prototype but can not use toString(), wont work with + operater,
// it does not inherit anything, not even basic methods
let o2 = Object.create(null);

// if you want to create an object like the {} or new Object()
let o3 = Object.create(Object.prototype); // o3 is now like {} or new Object()

// the Object.prototype takes a advance second argument -- look into this later

// if theres a property without a value and just a name it returnes undefined
// everything is stringifyed =>
let apples = {};

apples[1] = 2;
apples["1"] = 4;
console.log(apples[1]);

// to contain the value use the dot or bracket notation.
let author = book.author;
console.log(author);

let n = author.surname;
console.log(n);

let title = book["main title"];
console.log(title);

// create ot set property
book.edition = 7;
book["main title"] = "ECMAScript";
console.log(book);

// object.property
// object["property"]

// the second syntax, looks like array access, but to an array indexed by strings rather than by numbers.
// this kind of array is known as an ASSOCIATIVE ARRAY (or HASH or MAP or DICTIONARY)
// C, C++, Java and other strong typed programming language and object can only have
// a pre-determined amount of properties defined in advance.

// Javascript is loosely types which means any amount of properties can be created for any object.
// However, when useing the . operator to access a property, the name of the property  is
// expressed as an identifier. Identifiers must be literallly typed into your program and are not
// a datatype and can not be manipulated by the program.

// When useing the [] array notation, the name of the property is expressed as a string. 
// So it can be manipulated by the program =>
const customer = {
    address0: "123 Main St",
    address1: "456 Elm St",
    address2: "321 Oak St",
    address3: "980 Pine St"
};
let addr = "";

for(let i = 0; i < 4; i++) {
    addr += customer[`address${i}`] + "\n";
}

console.log(addr);

// the code above code be rewritten to use the dot notation =>
const customers = {
    address0: "123 Main St",
    address1: "456 Elm St",
    address2: "321 Oak St",
    address3: "980 Pine St"
};
let addrs = "";

addrs += customers.address0 + "\n";
addrs += customers.address1 + "\n";
addrs += customers.address2 + "\n";
addrs += customers.address3 + "\n";

console.log(addrs);