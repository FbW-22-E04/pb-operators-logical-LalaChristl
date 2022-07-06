// 1.

const isDogBetter = true;
const isCatBetter = false;
console.log('1a:', isDogBetter && isCatBetter);
// The second statement is false so it prints as false
console.log('1b:', isDogBetter || isCatBetter);
// The first statement is true so prints as true
console.log('1c:', !(isDogBetter && isCatBetter));
// The 'bang' turn the false statement to true

//  2.

const atoms = 13e50;
const sandGrains = 75e17;
const starsInSky = 200e29;

// 3.

console.log('3a:', atoms > starsInSky && atoms > sandGrains);
// Both statements are true
console.log('3b:', atoms !== sandGrains);
// This statement is true because they are not equal to one another
console.log('3c:', starsInSky < sandGrains || starsInSky > atoms);
// Both statements are false
console.log('3d:', atoms === starsInSky || atoms !== sandGrains);
// The second statement is true so it cancels the first false statement
console.log('3e:', atoms >= 10 && sandGrains <= 10);
// Both statements are false
console.log('3f:', atoms * starsInSky > 100 || atoms * sandGrains > 100);
// Both statements are true



