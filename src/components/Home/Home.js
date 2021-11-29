import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<h1>Facebook</h1>
			<div>
				{posts.map((post) => (
					<Posts post={post} key={post.id}></Posts>
				))}
			</div>
		</div>
	);
};

export default Home;
