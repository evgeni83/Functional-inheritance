'use strict';

function Vehicle(mark, model, fuelCapacity, fuelСonsumption) {

  this.military = false;
  this.mark = mark;
  this.model = model;
  this.fuelCapacity = fuelCapacity;
  this.fuelСonsumption = fuelСonsumption;
  
  this.cruisingRange = function () {
    var result = (+this.fuelCapacity / +this.fuelСonsumption) * 100;
    return result;
  };

  this.message = function () {
    console.log(this.type + ' ' + this.mark + ' ' + this.model + ' при полной заправке ' + this.movingMethod + ' ' + this.cruisingRange() + ' километров.');
    if (this.military) {
      console.log(this.mark + ' ' + this.model + ' - это военный ' + this.type);
    };
  };
};

function Car(mark, model, fuelCapacity, fuelСonsumption) {

  Vehicle.apply(this, arguments);

  this.type = 'автомобиль';
  this.movingMethod = 'проезжает';

};

function Plane(mark, model, fuelCapacity, fuelСonsumption) {
  
  Vehicle.apply(this, arguments);
  
  this.type = 'самолет'
  this.movingMethod = 'пролетает';
  
};

function Ship(mark, model, fuelCapacity, fuelСonsumption) {

  Vehicle.apply(this, arguments);

  this.type = 'корабль';
  this.movingMethod = 'проходит';
 
};

var car = new Car('BMW', 'X5', 50, 10);

car.message();

var jet = new Plane('Su', '27', 3000, 50);
jet.military = true;

jet.message();

var boat = new Ship('Yamaha', '2000', 150, 40);

boat.message();
