//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(sound){
		console.log(`${this._species} makes a ${sound} sound`);
	}
	
}
class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		console.log("purr");
	}
}



class Dog extends Animal {
	constructor(species){
		super(species)
	}
	bark(){
		console.log("Woof");
	}
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
