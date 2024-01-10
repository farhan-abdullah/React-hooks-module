import React, { useEffect, useRef } from 'react';
//ref hocche ekta reference state er shathe er kono shomporko i nai to ui er moddhe render korte parbo na
const UseRefExample = () => {
	const myRef = useRef<HTMLInputElement | null>(null);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(myRef.current?.value);
	};
	useEffect(() => {
		myRef.current?.focus();
	}, []);
	return (
		<div>
			<h1>useRef</h1>
			<form onSubmit={handleSubmit}>
				<input ref={myRef} type='text' name='name' id='name' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default UseRefExample;
