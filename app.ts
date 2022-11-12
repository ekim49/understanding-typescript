// ✨ union type
// parameter에 여러 타입이 있어야 할 때 사용한다.
function combine(
	input1: number | string,
	input2: number | string,
	resultConversion: 'as-number' | 'as-text'
) {
	let result;
	// union type을 사용할 때, 작성하는 로직에 따라서 아래와 같이 런타임에서 if문으로 타입을 체크해야 할 때가 있다.
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2; // numbers
	} else {
		result = input1.toString() + input2.toString(); // concatenate two strings
	}
	return result;
	// if (resultConversion === 'as-number') {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges); // 56

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges); // 56

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames); // MaxAnna
