//5. EVERY SOME

/*
Return a function that takes a list of valid users, 
and returns a function that returns true if all of the 
supplied users exist in the original list of users. 
Only check that id's match
*/

//goodUsers: a list of valid users
//use Array#some and Array#every 

function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(submittedUser){
			return goodUsers.some(function(goodUser){
				return goodUser.id === submittedUser.id
			});
		});
	}
}

module.exports = checkUsersVAlid