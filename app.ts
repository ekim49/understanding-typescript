// const person: { name: string; age: number } = {
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // tuple 타입
} = {
	name: 'Harry',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'], // 길이는 2에 number, string 타입이 각각 값으로 와야 하는 타입이다.
};

person.role.push('admin'); //
// person.role[1] = 10; // 타입스크립트는 role의 값으로 string 또는 number 타입이 와야한다는 사실만 알고 있어서 이 코드가 작동이 된다.
console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// console.log(person.name);

// for (const hobby of person.hobbies) {
// 	// hobby는 string 이니까 string의 메서드를 적용할 수 있다. toUpperCase() 같은..
// 	console.log(hobby.toUpperCase());
// }
