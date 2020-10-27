console.log(`Running Closures`);

console.error(`Basic Closure`);

const globalVar = `Global Value`;

function outer() {
  const outerVar = 'Outer Value';
  return function inner() {
    const innerVar = 'Inner Value';
    console.log(innerVar); // available within the current function scope
    console.log(outerVar); // available from the block scope. JS has looked upwards for the variable
    // console.log(globalVar); // goes up to global scope for variable.
  };
}

const innerFn = outer();
innerFn();
console.warn(`End Basic Closure`);

// Another example passing arguments into function parameters.
console.error(`Begin Greeting Example`);
function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name, date) {
    return `${myGreet} ${name} in ${date}`;
  };
}

const sayHi = createGreeting('Hi');
const sayBonjour = createGreeting('Bonjour');

console.log(sayHi(`Jay`, `November`));
console.log(sayBonjour(`J`, `Oct`));

console.warn(`End Greeting Example`);
// As you can see the arguments for sayHi are being passed to  the inner function of createGreating, even though we are calling the variable sayHi. Technically sayHi should have already ran createGreeting and the inner function would not be available.

console.error(`Begin Game Example`);
function createGame(gameName) {
  let score = 0;
  return function win(condition) {
    score++;
    return `You're playing ${gameName}, and your score is ${score}. Did you win: ${condition}`;
  };
}

const hockeyGame = createGame('Hockey'); // Sets gameName to Hockey

console.log(hockeyGame(true)); // Passes true to condition within hockeyGame

console.warn(`End Game Example`);
// Basic Friend List

function friendList() {
  let count = 0;
  return function (name) {
    count++;
    return `Your newest friend is ${name}, you now have ${count} friends.`;
  };
}

const friends = friendList();
// Test with friends('x') in console

// Advanced Friends List Array - testing my skills
console.error(`Begin Advanced Friends Array`);
function friendsName(name) {
  return name;
}

const myFriends = [];

function addFriend(x) {
  const newLength = myFriends.push(x);
}

function friendsList() {
  return myFriends.forEach(function (item, index) {
    console.log(`${item} is your #${index + 1} friend`);
  });
}
console.error(`Calling no friends D=`);
console.error(`Adding new friends`);
addFriend(`Andy`);
addFriend(`Terry`);
addFriend(`Nagle`);
addFriend(`Courtney`);
console.error('Calling some friends');
friendsList(); // Calling current friends
console.error(`Adding new friends`);
addFriend('Joe');
addFriend('Bob');
console.error(`Calling all friends`);
friendsList(); // Calling all friends (new and old)
