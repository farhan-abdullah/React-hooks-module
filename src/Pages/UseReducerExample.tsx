import React, { useReducer } from 'react';
type TAction = {
	type: string;
	payload: string;
};
// const initialState = { count: 0 };
const initialState = { name: '', email: '' };
const reducer = (currentState: typeof initialState, action: TAction) => {
	switch (action.type) {
		case 'addName':
			return { ...currentState, name: action.payload };

		case 'addEmail':
			return { ...currentState, email: action.payload };

		default:
			return currentState;
			break;
	}
};
const UseReducerExample = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(state);
	};
	return (
		// <div>
		// 	<h1>{state.count}</h1>
		// 	<button onClick={() => dispatch({ type: 'increment' })} type='button'>
		// 		Increment
		// 	</button>
		// 	<button onClick={() => dispatch({ type: 'decrement' })} type='button'>
		// 		Decrement
		// 	</button>
		// 	<button
		// 		onClick={() => dispatch({ type: 'IncrementByThree', payload: 3 })}
		// 		type='button'>
		// 		Increment By 3
		// 	</button>
		// </div>
		<form onSubmit={handleSubmit}>
			<input
				onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })}
				type='text'
				name='name'
				id='name'
			/>
			<input
				onChange={(e) => dispatch({ type: 'addEmail', payload: e.target.value })}
				type='text'
				name='email'
				id='email'
			/>
			<button type='submit' name='Submit'>
				Submit
			</button>
		</form>
	);
};

export default UseReducerExample;
