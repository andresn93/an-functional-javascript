//2. Higher Order Functions

/*
A higher-order function is a function that does at least one of the following:
* Take one or more functions as an input
* Output a function
All other functions are first order functions
/*

/*
Implement function that takes a function as its first argument,
a num as its second argument, then executes the passed function, 
num times
*/

function repeat(operation, num){
	if (num <= 0)
		return 1;
	else
		return operation * (num + 1);
}
module.exports = repeat

//OR: 

/*
function repeat(opearation, num){
	if (num <= 0) 
		return operation();
	return repeat(operation, --num);
}
module.exports = repeat
*/
