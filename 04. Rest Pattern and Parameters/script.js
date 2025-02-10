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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// NOTE: Rest Pattern
/* 
The Rest Pattern (...) and Rest Parameters (...) in JavaScript allow us to collect multiple values into an array. Even though they look like the spread operator (...), they perform the opposite function.
 */

// Rest in Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...others] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza);
console.log(risotto);
console.log(otherFoods);

// Rest in Object Destructuring
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Rest Parameters in Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers);
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('Mushrooms');

/* 
✔ Rest Pattern (...) gathers values in destructuring
✔ Rest Parameters (...) collect multiple function arguments into an array
✔ Rest is the opposite of Spread
✔ Must be the last element in destructuring or function arguments
*/
