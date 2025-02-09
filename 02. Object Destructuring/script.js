'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Destructuring Function Return Values (Array)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring Function Parameters (Object)

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// NOTE: Object Destructuring
/* 
Object destructuring is a JavaScript feature that allows you to extract properties from an object and assign them to variables in a simpler way.
*/

const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(openingHours);
console.log(categories);

/* 
The variable name must match the property name in the object.
Order does not matter (unlike arrays). 
*/

// Renaming Variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(name, openingHours, categories);

// Default Values
/* ✅ Prevents undefined values when a property is missing. */

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating values
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;

console.log(o, c);

// Destructuring in Function Parameters
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

/* 
✔ Extracts object properties into variables efficiently.
✔ Can rename variables and set default values.
✔ Works with nested objects.
✔ Can be used in function parameters and loops.
*/
