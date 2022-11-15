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

// let someValue: undefined; // 이렇게 하면 someValue는 영구적으로 undefined 타입을 갖게 된다.
// undefined 는 return 이 필요하고, void는 return이 필요하지 않다. (void는 아무것도 반환하지 않을 때 사용하기 때문)
