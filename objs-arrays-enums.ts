// const person: { name: string; age: number } = {
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // tuple 타입
// } = {
// 	name: 'Harry',
// 	age: 30,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author'], // 길이는 2에 number, string 타입이 각각 값으로 와야 하는 타입이다.
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { // 대문자로 시작하는 것이 컨벤션이다. 초기값을 지정하지 않으면 0부터 시작하는 것이 기본이고, 초기값을 설정한다면 그 숫자부터 1씩 증가해서 각각 할당된다. 각각의 값을 지정해주는 것도 가능하다. (숫자, 문자열 상관없이)
	ADMIN, // 0
	READ_ONLY, // 1
	AUTHOR, // 2
}

// ⚡️ any
// any를 사용하면 모든 타입이 올 수 있다. 그러므로 타입스크립트의 이점을 누릴 수 없다.
// 어떤 타입이 와야할지 불분명할 경우와 같은 불가피한 상황에만 사용하고 가급적 any를 사용하지 않는 것이 좋다.
// any를 사용하게 될 경우에는 if문으로 런타임에서 타입을 체크할 수 있는 장치를 마련해야 한다.

const person = {
	name: 'Harry',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10; // 타입스크립트는 role의 값으로 string 또는 number 타입이 와야한다는 사실만 알고 있어서 이 코드가 작동이 된다.

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
	// hobby는 string 이니까 string의 메서드를 적용할 수 있다. toUpperCase() 같은..
	console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
	console.log('is author');
}
