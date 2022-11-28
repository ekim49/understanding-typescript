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
