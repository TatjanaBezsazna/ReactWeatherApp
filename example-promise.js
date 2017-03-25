//http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=1e964e5e157f51456e69caa7cfe5ac27

function addPromise(a,b) {
	return new Promise(function(resolve, reject) {
		
		if(typeof a === 'number' && typeof b === 'number') {
			
			resolve(a, b);
			
		} else {
			
			reject();
			
		}
	})
}

function success(a, b) {
	console.log(a + b);
}

function reject() {
	console.log("Error: arguments should be numbers");
}

addPromise(2, 4).then(success, reject);
