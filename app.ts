let userInput: unknown; // 유저가 어떤 input을 넣을지 모를 때
let userName: string;

userInput = 5;
userInput = 'Harry';
// userName = userInput // 이렇게 하면 고정된 타입을 가진 변수에 unknown 타입을 가진 변수를 할당하는 것이기 때문에 에러가 발생한다.
// 이럴 경우, 아래와 같이 type check를 해주면 unknown 타입의 변수를 할당할 수 있다.
// 어떤 타입이 올지 모를 때 any 타입을 사용하기 보다 타입 체크를 하면서 unknown 타입을 사용하는 것이 좋다.
if (typeof userInput === 'string') {
	userName = userInput;
}

// never type
// 절대로 아무것도 반환하지 않는 타입
// 아래의 generateError 함수 예제와 같은 경우에도 never 타입을 사용할 수 있고,
// infinite loop에도 사용할 수 있다.
function generateError(message: string, code: number): never {
	// 이 함수는 특정한 값을 절대로 반환하지 않는다. (= 아무것도 반환하지 않는다.)
	// generateError 함수에 타입을 쓰기 전에 확인해보면 타입스크립트는 이 함수를 void로 타입 추론한다.
	// 하지만 이 함수는 절대로 아무것도 반환하지 않는 함수이기에, never로 구체적으로 타입을 지정하면 명료하고 가독성있는 코드가 된다.
	throw { message: message, errorCode: code };
	// or
	// while (true) {} -> infinite loop => never returns
}

// generateError('An error occurred!', 500);
const result = generateError('An error occurred!', 500);
console.log(result);
