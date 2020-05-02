function convertToRoman(num) {
	//So from the hints we'll create 2 arrayys
	//We want the roman numeral to match up with its number in the number array

	//Create an array of possible roman numerals that satisy the answer requirements
	let romanNumerals = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];

	//Create an array of possible numbers that match with the roman numeral
	let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	//Create an empty string to place the converted number
	let convertedNumber = "";

	//So we'll create a for loop to loop through the numbers array
	//Have a while loop in it that states, while num is greater than the number in the array, then run some code
	for (let i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			//While our passed in number (num) is greater than the number in the array (numbers[i]), do something
			//That something is: add the roman numberal value at the position we stopped on in our number array and add that roman numeral to our empty array "convertedNumber"
			convertedNumber += romanNumerals[i];
			//After that minus the number that we stopped on in the loop from "num" and repeat the process till it ends
			num -= numbers[i];
		}
	}
	return convertedNumber;
}
