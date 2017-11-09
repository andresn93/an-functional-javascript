//4. FILTER 

/*
write function getShortMessages that takes an array
of objects with '.message' properties and returns 
an array of messages that are less than < 50 characters long.
*/

//arguments - messages: an Array of 10 to 100 random objects

function getShortMessages(messages){
	return messages.filter(function(item){
		return item.message.length < 50
	}).map(function(item){
		return item.message
	});
}

module.exports = getShortMessages
