import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';

function App() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<Posts post={post}></Posts>
			))}
		</div>
	);
}

export default App;
