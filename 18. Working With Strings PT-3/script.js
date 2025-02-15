'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Data needed for first part of the section
const openingHours = {
  [weekDays[3]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Enhanced Object Literals
  openingHours,

  // Destructuring Function Return Values (Array)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring Function Parameters (Object)

  // Enhance Object Literals
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const airline = 'Bangladesh Biman';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Bangladesh'));

console.log(airline.slice(0, 10));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got lucky`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

const email = 'hello@ephraim.io';
const loginEmail = '   Hello@Ephraim.Io   \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

const priceGB = '288,97GBP';
const priceUS = priceGB.replace('GBP', 'USD').replace(',', '.');

console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

const planeNeo = 'Airbus A320neo';
console.log(planeNeo.includes('A320'));
console.log(planeNeo.includes('Boeing'));
console.log(planeNeo.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('Neo')) {
  console.log(`Part of the NEW AIRBUS family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase(items);

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed to on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage(`I have a laptop, some food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

console.log('a+very+nice+string'.split('+'));
console.log('Ephraim S'.split(' '));

const [firstName, lastName] = 'Ephraim S'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ephraim s');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '='));
console.log(message.padEnd(25, '='));

const maskCreditCard = function (num) {
  const str = num + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(15654654564));
console.log(maskCreditCard('1565465456654774'));
console.log(maskCreditCard('15654654546765767544446654774'));

const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
