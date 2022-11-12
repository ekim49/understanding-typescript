function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	// if (typeof n1 !== 'number' || typeof n2 !== 'number') {
	//   throw new Error('Incorrect input!');
	// }
	const result = n1 + n2;
	if (showResult) {
		// console.log(phrase + n1 + n2); // 이렇게 하면 phrase는 string, n1 + n2는 number 이니까 string + number 가 되면서 전체가 string 이 된다. => Result is: 52.8 이 출력됨. 그래서 2번째 줄 처럼 따로 n1 + n2의 결과값을 담은 변수를 선언한다.
		console.log(phrase + result); // Result is: 7.8
	} else {
		// return n1 + n2;
		return result;
	}
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
