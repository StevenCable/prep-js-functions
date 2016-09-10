/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */
var a = 12;
var b = 11;

/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */
function add(random1, random2){
	return random1 + random2; 
}
var sum = add(a,b);
console.log(sum);
/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */
 function detract(random2, random1){
 	return random2 - random1;

 }
var subtract = detract(b,a);
console.log(subtract);

/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */
function oppositeDivide(random2, random1){
	return random2 * random1;
}
var product = oppositeDivide(b,a);
console.log(product);

/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */
function checkDifference(random1){
	return "My football team lost " +random1+ " times this week";
}
console.log(checkDifference(subtract));
/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */
function checkSum(poopyButt){
	return "I CAN ADDZ " + poopyButt + " NUMBERS";
}
console.log(checkSum(sum));

/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */
 function checkProduct(random1, random2){
 	return random1*random2;
 }
 console.log(checkProduct(product, subtract));

/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */
 var c = 10;
function addThenSubtract(random1, random2, random3){
	return detract(add(random1, random2), random3);
}
console.log(addThenSubtract(a, b, c));
/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */
function addThenMultiply(random1,random2,random3){
	return oppositeDivide(add(random1,random2),random3);
}
console.log(addThenMultiply(a,b,c));
/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */
 function createFullName(beginning,end){
 	return beginning + end;

 }
var firstName = "Yo Dawg ";
var lastName = "It's me, Steven Cable";
console.log(createFullName(firstName,lastName));

/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */
function verifyDrinkingAge(canDrinkMaybe){
	if (canDrinkMaybe >= 21){
		return true;
	}
	else
		return false;
}
var canDrinkBeer = verifyDrinkingAge(18);
console.log(canDrinkBeer);
/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */
function throwParty(age){
	if (age>=21) {
		return "This Party will be drowning in alcohol";
	}
	else 
		return "You're hecka young and should probably just not show up";
}
console.log(throwParty(canDrinkBeer));


/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */
function eatFood(name, edible){
	return name + " and I loves to eat " + edible;
}
var food = "cinnamon toast crunch";
createFullName();
console.log(eatFood(createFullName(firstName,lastName), food));

/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */
