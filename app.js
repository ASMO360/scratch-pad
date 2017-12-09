'use strict';

function Animal(name, color) {
  this.name = name;
  this.color = color;
  this.isMammal = true;
}

function Cat(name) {
  this.name = name;
  this.color = "fawn";
}

function Persian(name) {
  this.name = name;
  this.says = "Meow Meow";
}

Cat.prototype = new Animal();
Persian.prototype = new Cat();
var myPersian = new Cat("Jules");
