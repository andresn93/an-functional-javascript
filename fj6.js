//6. FOR EACH
/*
Given an Array of strings, use Array#reduce to create an object 
that contains the number of times each string occured in the array.
Return the object directly.
*/

//inputWords: an array of random strings.

module.exports = function countWords(inputWords){
	return inputWords.reduce(function(acc, total){
		if (!acc[total]){
			acc[total] = 1;
		}else{
			acc[total] = acc[total] + 1;
		}
		return acc;
	}, {});
}

//OR: 

/*
module.exports = function countWords(arr){
	return arr.reduce(function(countMap, word){
		countMap[word] = ++countMap[word] || 1;
		return countMap;
	}, {});
}
*/