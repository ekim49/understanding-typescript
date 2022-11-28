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

// ✨ callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	// 이런식으로 callback function에도 parameter과 리턴 값의 타입을 지정해줄 수 있다.
	const result = n1 + n2;
	cb(result);
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

addAndHandle(10, 20, (result) => {
	// 위에서 콜백함수의 타입을 지정했으니 그 조건을 벗어나는 함수를 작성하면 타입스크립트는 에러를 발생시킨다.
	console.log(result); // 30
	// return result; // 위의 콜백함수에서 리턴값의 타입으로 void를 지정했기 때문에 작동아 안되는게 맞지만, 타입스크립트는 고의적으로 작동시킨다. 그리고 작동시키는 이유가 있다.
});
