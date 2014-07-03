// A callback is a regular javascript function which is passed as a parameter
// to another javascript function
//

var foo = function() {
	console.log("Hello, I am function foo");
};

// We just defined a function named "foo", it doesn't do anything useful right now
// but just prints a message introducing itself.

// We now define another function which takes a single parameter
// We call this function "bar"
//

var bar = function(cb) {
	console.log("Hello, I am bar");
	console.log("I am now going to call 'cb' which was passed to me");

	cb();
};

// The "foo" function Looks somewhat similar to "bar" but accepts one parameter
// It introduces itself and then calls the passed parameter using the function
// call notation of a pair of parenthesis
//


// lets see bar is action now:
//

bar(foo);

// We just called the function "bar" (recall that it has parenthesis after it) and
// passed it one parameter which is again a function "foo".
//
// This "foo" function can also be called a callback function, since it was passed to "bar"
// as an argument and was later "called back" by the "bar" function.
//
// Its like leaving a callback phone number.
//
//    "When you're free and done with what you're asked to or supposed to do call me back"
//

// Lets define another function which callsback after a given amount of time
//

var callMeAfterNSeconds = function(n, cb) {
	setTimeout(cb, n * 1000);
};

// This function uses the setTimeout javascript function to schedule a callback
// The setTimeout function waits for the given ms amount of time and blindly calls
// the passed first parameter
//
// Lets try calling that function and pass in our callback function "foo"

callMeAfterNSeconds(2, foo);


// The callback functions, like any other functions, accept arguments when called
//
// Lets define a function which we intend to use as a callback function
//

var baz = function(a, b) {
	console.log("I was called with two arguments:", a, b);
};

// "baz" is a pretty simple function which accepts two arguments and prints them
// out


