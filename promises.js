// callback pattern vs promise pattern

// take location, return temperature

/*
function getTempCallback(location, callback) {
	callback(undefined, 78);
	callback("City Not Found");
}


getTempCallback('Denver', function(err, temp) {
	if (err) {
		console.log('error', err);
	} else {
		console.log('success', temp);
	}
});

// Use a promise instead

function getTempPromise(location) {
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
		resolve(79);
		reject('City not found');			
	}, 1000)

	});
}


// Reject and resolve can only run one time - avoid err and succ differenttion
// of cases


// the function that takes a temp = resolve
// the function that takes an error = reject
getTempPromise('Denver').then(function (temp) {
	console.log('Promose OK', temp);
}, function(err) {
	console.log('Promise Err', err);
})

*/


// Challenge Area - 
	// return a promise - if both numbers, return sum
	// else, reject and error = both not numbers
	// if (typeof 7 === 'number')....


function addPromise(a,b) {
	return new Promise(function (resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('Please use two numbers here!');
		}
	})
}


addPromise(2,3).then(function(sum) {
	console.log('OK', sum)
}, function(err) {
	console.log('Shit', err);
})



addPromise(2,'').then(function(sum) {
	console.log('OK', sum)
}, function(err) {
	console.log('Shit', err);
})



