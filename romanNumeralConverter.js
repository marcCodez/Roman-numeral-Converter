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

	//4 digits, first number ()
	if (numberArray.length === 4 && numberArray[0] === "1") {
		finalRomanNumeral += "M";
	}
	if (numberArray.length === 4 && numberArray[0] === "2") {
		finalRomanNumeral += "MM";
	}
	if (numberArray.length === 4 && numberArray[0] === "3") {
		finalRomanNumeral += "MMM";
	}
	if (numberArray.length === 4 && numberArray[0] === "4") {
		finalRomanNumeral += "M";
	}
	if (numberArray.length === 4 && numberArray[0] === "5") {
		finalRomanNumeral += "V";
	}
	if (numberArray.length === 4 && numberArray[0] === "6") {
		finalRomanNumeral += "M";
	}
	if (numberArray.length === 4 && numberArray[0] === "7") {
		finalRomanNumeral += "M";
	}
	if (numberArray.length === 4 && numberArray[0] === "8") {
		finalRomanNumeral += "M";
	}
	if (numberArray.length === 4 && numberArray[0] === "9") {
		finalRomanNumeral += "M";
	}

	//3 digits, first number (Hundreds)
	if (numberArray.length === 3 && numberArray[0] === "1") {
		finalRomanNumeral += "C";
	}

	if (numberArray.length === 3 && numberArray[0] === "2") {
		finalRomanNumeral += "CC";
	}

	if (numberArray.length === 3 && numberArray[0] === "3") {
		finalRomanNumeral += "CD";
	}

	if (numberArray.length === 3 && numberArray[0] === "4") {
		finalRomanNumeral += "CD";
	}

	if (numberArray.length === 3 && numberArray[0] === "5") {
		finalRomanNumeral += "D";
	}

	if (numberArray.length === 3 && numberArray[0] === "6") {
		finalRomanNumeral += "DC";
	}

	if (numberArray.length === 3 && numberArray[0] === "7") {
		finalRomanNumeral += "DCC";
	}

	if (numberArray.length === 3 && numberArray[0] === "8") {
		finalRomanNumeral += "DCCC";
	}

	if (
		(numberArray.length === 3 && numberArray[0] === "9") ||
		(numberArray.length === 4 && numberArray[1] === "9")
	) {
		finalRomanNumeral += "CM";
	}

	//First digit, 2 numbers (Tens)
	if (
		(numberArray.length === 2 && numberArray[0] === "1") ||
		(numberArray.length === 3 && numberArray[1] === "1") ||
		(numberArray.length === 4 && numberArray[2] === "1")
	) {
		finalRomanNumeral += "X";
	}
	if (
		(numberArray.length === 2 && numberArray[0] === "2") ||
		(numberArray.length === 3 && numberArray[1] === "2") ||
		(numberArray.length === 4 && numberArray[2] === "2")
	) {
		finalRomanNumeral += "XX";
	}

	if (
		(numberArray.length === 2 && numberArray[0] === "3") ||
		(numberArray.length === 3 && numberArray[1] === "3") ||
		(numberArray.length === 4 && numberArray[2] === "3")
	) {
		finalRomanNumeral += "XXX";
	}

	if (
		(numberArray.length === 2 && numberArray[0] === "4") ||
		(numberArray.length === 3 && numberArray[1] === "4") ||
		(numberArray.length === 4 && numberArray[2] === "4")
	) {
		finalRomanNumeral += "XL";
	}
	if (
		(numberArray.length === 2 && numberArray[0] === "5") ||
		(numberArray.length === 3 && numberArray[1] === "5") ||
		(numberArray.length === 4 && numberArray[2] === "5")
	) {
		finalRomanNumeral += "L";
	}

	if (
		(numberArray.length === 2 && numberArray[0] === "6") ||
		(numberArray.length === 3 && numberArray[1] === "6") ||
		(numberArray.length === 4 && numberArray[2] === "6")
	) {
		finalRomanNumeral += "LX";
	}

	if (
		(numberArray.length === 2 && numberArray[0] === "7") ||
		(numberArray.length === 3 && numberArray[1] === "7") ||
		(numberArray.length === 4 && numberArray[2] === "7")
	) {
		finalRomanNumeral += "LXX";
	}

	if (
		(numberArray.length === 2 && numberArray[0] === "8") ||
		(numberArray.length === 3 && numberArray[1] === "8") ||
		(numberArray.length === 4 && numberArray[2] === "8")
	) {
		finalRomanNumeral += "LXXX";
	}

	if (
		(numberArray.length === 2 && numberArray[0] === "9") ||
		(numberArray.length === 3 && numberArray[1] === "9") ||
		(numberArray.length === 4 && numberArray[2] === "9")
	) {
		finalRomanNumeral += "XC";
	}

	//Second digit, 2 numbers (Ones)
	if (
		(numberArray.length === 2 && numberArray[1] === "1") ||
		(numberArray.length === 3 && numberArray[2] === "1") ||
		(numberArray.length === 4 && numberArray[3] === "1")
	) {
		finalRomanNumeral += romanArray[0];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "2") ||
		(numberArray.length === 3 && numberArray[2] === "2") ||
		(numberArray.length === 4 && numberArray[3] === "2")
	) {
		finalRomanNumeral += romanArray[1];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "3") ||
		(numberArray.length === 3 && numberArray[2] === "3") ||
		(numberArray.length === 4 && numberArray[3] === "3")
	) {
		finalRomanNumeral += romanArray[2];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "4") ||
		(numberArray.length === 3 && numberArray[2] === "4") ||
		(numberArray.length === 4 && numberArray[3] === "4")
	) {
		finalRomanNumeral += romanArray[3];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "5") ||
		(numberArray.length === 3 && numberArray[2] === "5") ||
		(numberArray.length === 4 && numberArray[3] === "5")
	) {
		finalRomanNumeral += romanArray[4];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "6") ||
		(numberArray.length === 3 && numberArray[2] === "6") ||
		(numberArray.length === 4 && numberArray[3] === "6")
	) {
		finalRomanNumeral += romanArray[5];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "7") ||
		(numberArray.length === 3 && numberArray[2] === "7") ||
		(numberArray.length === 4 && numberArray[3] === "7")
	) {
		finalRomanNumeral += romanArray[6];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "8") ||
		(numberArray.length === 3 && numberArray[2] === "8") ||
		(numberArray.length === 4 && numberArray[3] === "8")
	) {
		finalRomanNumeral += romanArray[7];
	}
	if (
		(numberArray.length === 2 && numberArray[1] === "9") ||
		(numberArray.length === 3 && numberArray[2] === "9") ||
		(numberArray.length === 4 && numberArray[3] === "9")
	) {
		finalRomanNumeral += romanArray[8];
	}

	return finalRomanNumeral;
}

convertToRoman(36);
