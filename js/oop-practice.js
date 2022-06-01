// STEP 1
// function Cat() {}
// const Dog = function() {}

// STEP 2
// class Cat {}
// class Dog {}
// const cat1 = new Cat();
// const dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created')
//     }
// }

// STEP 4
// class Animal {
//     constructor() {
//         console.log('The Animal has been created')
//     }
// }
// const animal1 = new Animal();

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         console.log(`The ${this.color} ${this.breed} (${this.type}) with ${this.height} ft height and ${this.length} ft length has been created.`)
//     }
// }
// const myPet = new Animal('Dog', 'Greyhound', 'Black', 2, 5);

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const pet = new Animal();
// for (property in pet) {
//     console.log(property);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         this.speak = function() {
//             if (this.type === 'Dog') {
//                 console.log(`The ${this.color} dog is barking!`)
//             } else if (this.type === 'Cat') {
//                 console.log(`The ${this.color} cat is meowing!`)
//             } else {
//                 console.log(`The ${this.color} ${this.type} is trying to tell us something!`)
//             }
//         }
//     }
// }
// const dog1 = new Animal('Dog', 'Greyhound', 'Black', 2, 5);
// dog1.speak();
// const cat1 = new Animal('Cat', 'Bengal', 'White', 1, 2);
// cat1.speak();
// const bird1 = new Animal('Bird', 'Parrot', 'Yellow', 1, 2);
// bird1.speak();

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;
//         let _checkType = function() {
//             return _type;
//         }
//         this.speak = function() {
//             _checkType();
//             console.log(`The ${_type} has made a noise!`)
//         }
//     }
// }
// const dog1 = new Animal('Dog', 'Greyhound', 'Black', 2, 5);
// dog1.speak();
// const cat1 = new Animal('Cat', 'Bengal', 'White', 1, 2);
// cat1.speak();
// const bird1 = new Animal('Bird', 'Parrot', 'Yellow', 1, 2);
// bird1.speak();

// STEP 9
String.prototype.findWords = function(string, word) {
    let _string = string;
    let _word = word;
    return string.split(word).length - 1;
}
let paragraph = 'For this is how God loved the world; He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life. God sent his Son into the world not to judge the world, but to save the world through him.';
let count = console.log(paragraph.findWords(paragraph, "world"));