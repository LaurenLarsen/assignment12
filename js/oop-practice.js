// STEP 1
function Cat() {}

const Dog = function() {}

// STEP 2
let cat1 = new Cat();
const dog1 = new Dog();

// STEP 3
class Animal {
    constructor(){
        this.saying = "The Animal has been created";
    }
}

const animal1 = new Animal();

console.log(animal1.saying);

// STEP 4
function Animal(){
    console.log('The new animal has been created!')
}

const animal1 = new Animal();


// STEP 5
function Animal (type,breed,color,height,length){
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    console.log(`The New ${this.type} ${this.breed} ${this.color} ${this.height} ${this.length} Has Been Created`);
}

const lilly = new Animal ("Dog", "Border Collie", "Blonde", "2 Feet", "4 Feet");

// STEP 6
const object = {"Type": "Dog","Breed": "Border Collie","Color": "Blonde","Height": "2 Feet","Length": "4 Feet",};
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }

// STEP 7
function Animal(species, color) {
	this.species = species;
	this.color = color;
	this.speak = function() {
    if(this.species === 'Cat'){
      console.log(`The  ${this.color} ${this.species} has meowed!`);
    }if(this.species === 'Dog'){
      console.log(`The  ${this.color} ${this.species} has barked!`);
    }
	}
}
const animal1 = new Animal('Dog', 'Blue');
animal1.speak();

// STEP 8
function Animal(type) {
	let _type = type;
	let checkType = function() {
		if(type === 'Dog'){
      console.log(`The  ${_type} has made a noise!`);
    }else{
      console.log(`The  ${_type} has made a noise!`);
    }
    
	}
  this.speak = function(){
    checkType();
  }

}
const animal1 = new Animal('Frog');
animal1.speak();

// STEP 9
//native object
function findWords(find, paragraph) {
  var myRe = new RegExp("\\b" + find + "\\b((?!\\W(?=\\w))|(?=\\s))", "gi"),
      myArray, myResult = [];
  while ((myArray = myRe.exec(paragraph)) !== null) {
      myResult.push(myArray.index);
  }
  return myResult;
}
