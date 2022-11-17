// ✨ function return type
// 함수가 반환하는 값의 타입을 말한다.
function add(n1: number, n2: number) {
	return n1 + n2;
}

// ✨ void
// 아무것도 반환하지 않는 함수일 때, 그 함수의 타입은 void 이다.
function printResult(num: number): void {
	console.log('Result: ' + num);
}

printResult(add(5, 12)); // Result: 17

// let combineValues: Function; // 이렇게도 함수타입이라고 쓸 수 있기도 하지만, 아래처럼 더 구체적으로 쓸 수 있다.
let combineValues: (a: number, b: number) => number; // 변수 combineValues는 함수 타입인데, 숫자 타입을 가진 두 개의 매개변수를 받아 숫자 타입의 값을 리턴하는 함수이다.

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8)); // 16

// let someValue: undefined; // 이렇게 하면 someValue는 영구적으로 undefined 타입을 갖게 된다.
// undefined 는 return 이 필요하고, void는 return이 필요하지 않다. (void는 아무것도 반환하지 않을 때 사용하기 때문)
