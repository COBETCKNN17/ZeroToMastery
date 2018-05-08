var database = [
	{
		UserName: 'andrei',
		Password: 'secret'
	},
	{
		UserName: 'sally',
		Password: '123'
	},
	{
		UserName: 'ingrid',
		Password: '777'
	}
];

var newsFeed = [
	{
		userName: 'bobby',
		timeLine: 'so tired from all that learning'
	},
	{
		userName: 'sally',
		timeLine: 'love to learn'
	},
	{
		userName: 'mitch',
		timeLine: 'me like javascript'
	}
];

var userNamePrompt = prompt('What\'s your User Name?');
var passwordPrompt = prompt('What\'s your Password?');

function isUserValid(user, pass){
	for(var i = 0; i < database.length; i++){
		if(user === database[i].UserName  &&  pass === database[i].Password){
			return true;
		}
	}
	return false;
}

function signIn(user, pass){
	if(isUserValid(user, pass)){
		console.log(newsFeed);
	}else{
		alert('Wrong User Name and Password');
	}
}; 

signIn(userNamePrompt, passwordPrompt);