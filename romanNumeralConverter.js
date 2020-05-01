function convertToRoman(num) {
	let numString = num.toString();
	let numberArray = numString.split("");

	let romanArray = [
		"I",
		"II",
		"III",
		"IV",
		"V",
		"VI",
		"VII",
		"VIII",
		"IX",
		"X",
	];

	let finalRomanNumeral = "";

	//1-10
	for (let i = 0; i < romanArray.length; i++) {
		if (num === i) {
			return romanArray[i - 1];
		}
	}

	//First digit, 2 numbers
	if (numberArray.length === 2 && numberArray[0] === "1") {
		finalRomanNumeral += "X";
	}
	if (numberArray.length === 2 && numberArray[0] === "2") {
		finalRomanNumeral += "XX";
	}

	if (numberArray.length === 2 && numberArray[0] === "3") {
		finalRomanNumeral += "XXX";
	}

	if (numberArray.length === 2 && numberArray[0] === "4") {
		finalRomanNumeral += "XL";
	}
	if (numberArray.length === 2 && numberArray[0] === "5") {
		finalRomanNumeral += "L";
	}

	if (numberArray.length === 2 && numberArray[0] === "6") {
		finalRomanNumeral += "LX";
	}

	if (numberArray.length === 2 && numberArray[0] === "7") {
		finalRomanNumeral += "LXX";
	}

	if (numberArray.length === 2 && numberArray[0] === "8") {
		finalRomanNumeral += "LXXX";
	}

	if (numberArray.length === 2 && numberArray[0] === "9") {
		finalRomanNumeral += "XC";
	}

	//Second digit, 2 numbers
	if (numberArray.length === 2 && numberArray[1] === "1") {
		finalRomanNumeral += romanArray[0];
	}
	if (numberArray.length === 2 && numberArray[1] === "2") {
		finalRomanNumeral += romanArray[1];
	}
	if (numberArray.length === 2 && numberArray[1] === "3") {
		finalRomanNumeral += romanArray[2];
	}
	if (numberArray.length === 2 && numberArray[1] === "4") {
		finalRomanNumeral += romanArray[3];
	}
	if (numberArray.length === 2 && numberArray[1] === "5") {
		finalRomanNumeral += romanArray[4];
	}
	if (numberArray.length === 2 && numberArray[1] === "6") {
		finalRomanNumeral += romanArray[5];
	}
	if (numberArray.length === 2 && numberArray[1] === "7") {
		finalRomanNumeral += romanArray[6];
	}
	if (numberArray.length === 2 && numberArray[1] === "8") {
		finalRomanNumeral += romanArray[7];
	}
	if (numberArray.length === 2 && numberArray[1] === "9") {
		finalRomanNumeral += romanArray[8];
	}

	return finalRomanNumeral;
}

convertToRoman(36);
