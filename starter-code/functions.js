// Question 1

function maxOfTwoNumbers (a,b) {
	if (a > b) {
		return a;
	}else if (b > a){
		return b;
	}else  {
		return "What?";
	}
}

maxOfTwoNumbers(5,9)
}

// Question 2
function maxOfThree (a,b,c) {
	if (a > b && a > c) {
		return a;
	}else if (b > a && b > c){
		return b;
	}else  {
		return c;
	}
}
maxOfThree()
}

// Question 3
var vowels = ["a","e","i","o","u"]
function isCharacterAVowel (character) {
	for (var i = 0; i < vowels.length; i++) {
	if (character === vowels[i] ) {
		return "true"
	}
	else {
		return "false"
	}
	}
}
isCharacterAVowel("p")

// Question 4
function sumArray (numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
	sum = sum + numbers[i];
	}return sum;
}


// Question 4
function multiplyArray (numbers) {
	var sum = 1;
	for (var i = 0; i < numbers.length; i++) {
	sum = sum * numbers[i];
	}return sum;

	
}


// Question 5
function numberOfArguments (numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
	sum = numbers[i];
	}return sum;
}


numberOfArguments([1,2])



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
function charactersOccurencesCount() {
  
}

