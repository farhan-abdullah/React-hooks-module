import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
	const [hidden, setHidden] = useState(true);
	const [user, setUser] = useState({ name: '', email: '' });
	useEffect(() => {
		console.log('render');
	}, [user.name, user.email]);
	return (
		<div>
			<input
				type='text'
				onBlur={(e) => setUser({ ...user, name: e.target.value })}
				name='name'
				id='name'
			/>
			<input
				type='text'
				onBlur={(e) => setUser({ ...user, email: e.target.value })}
				name='email'
				id='email'
			/>
		</div>
	);
};
const Counter = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const intervedId = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(intervedId);
	}, []);
	return (
		<>
			<h1>{count}</h1>
		</>
	);
};
const Todo = () => {
	const controller = new AbortController();
	const signal = controller.signal;
	useEffect(() => {
		fetch('http://jsonplaceholder.typicode.com/todos/1', { signal })
			.then((res) => res.json())
			.then((data) => alert(data.title));
		return () => {
			controller.abort();
		};
	}, []);
	return (
		<>
			<h1>Hello World</h1>
		</>
	);
};
export default UseEffectExample;
