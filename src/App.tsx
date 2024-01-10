import { useState } from 'react';
import './App.css';
import UseReducerExample from './Pages/UseReducerExample';
import UseEffectExample from './Pages/UseEffectExample';
import UseRefExample from './Pages/UseRefExample';

function App() {
	const [user, setUser] = useState({ name: '', email: '' });
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(user);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(user);
		const inputName = e.target.name;
		const value = e.target.value;
		setUser({ ...user, [inputName]: value });
	};
	return (
		<>
			{/* <form onSubmit={handleSubmit}>
				<input onChange={handleChange} type='text' name='name' id='name' />
				<input onChange={handleChange} type='text' name='email' id='email' />
			</form> */}
			{/* <UseReducerExample></UseReducerExample> */}
			{/* <UseEffectExample></UseEffectExample> */}
			<UseRefExample></UseRefExample>
		</>
	);
}

export default App;
