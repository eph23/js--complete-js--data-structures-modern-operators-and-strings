'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// NOTE: Array Destructuring
/* Array destructuring is a JavaScript feature that allows you to extract values from an array and assign them to variables in a single step. */

const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(x);
console.log(y);
console.log(z);

const [first, second] = restaurant.categories;
console.log(first);
console.log(second);

// Skipping value
/* If you don’t need all values, use commas to skip elements. */
const [third, , fourth] = restaurant.categories;
console.log(third, fourth);

//  Swapping/switching Variables Using Destructuring
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructuring Function Return Values
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [l, , [m, n]] = nested;
console.log(l, m, n);

// Default Values
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);

/* 
✔ Destructuring extracts array values into variables efficiently.
✔ You can skip elements, set default values, swap variables, and extract from nested arrays.
✔ Works well in functions, loops, and returned values.
*/
