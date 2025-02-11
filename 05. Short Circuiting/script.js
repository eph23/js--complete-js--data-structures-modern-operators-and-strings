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

// NOTE: Short-Circuiting
/* 
Short-circuiting refers to the process where JavaScript evaluates expressions and stops evaluating further once the result is determined based on the logical operators.

It is a behavior of logical operators like && (AND) and || (OR). In short-circuiting, JavaScript will not evaluate the second operand if the result can be determined by the first operand.
 */

// NOTE: OR (||) Operator Short-Circuiting
/* 
The OR (||) operator returns the first truthy value it encounters or the last operand if all are falsy.
*/
console.log(3 || 'Ephraim');
console.log('' || 'Ephraim');
console.log(true || 0);
console.log(undefined || null);

/* 
✅ Behavior:
If the first operand is truthy, JavaScript doesn't evaluate the second operand (because the whole expression will be truthy).
If the first operand is falsy, JavaScript evaluates and returns the second operand.
*/

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//  NOTE: AND (&&) Operator Short-Circuiting
/* 
The AND (&&) operator returns the first falsy value it encounters or the last operand if all are truthy.
*/

console.log(0 && 'Ephraim');
console.log(7 && 'Ephraim');

/* 
✅ Behavior:
If the first operand is falsy, JavaScript doesn't evaluate the second operand (because the whole expression will be falsy).
If the first operand is truthy, JavaScript evaluates and returns the second operand. 
*/

console.log('Hello' && 23 && null & 'Ephraim');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'olive', 'tomato');
