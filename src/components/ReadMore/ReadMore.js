import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ReadMore = () => {
	// We used 'useParams' hook here to access the dynamic pieces of the URL.
	const { postId } = useParams();

	const [id, setID] = useState({});
	const { body } = id;

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setID(data));
	}, []);

	return (
		<Card style={{ margin: '50px' }} sx={{ maxWidth: '100%' }}>
			<CardMedia height='140' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Post Body Details:
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{body}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={`/comments/${postId}`}>
					<Button size='small'>Read Comments</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default ReadMore;
