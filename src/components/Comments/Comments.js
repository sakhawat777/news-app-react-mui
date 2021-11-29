import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fakeURL from '../../fakeURL/fakeURL.json'
import '../Comments/Comments.css'

const Comments = () => {
	const { commentId } = useParams();
	// console.log(commentId);
	const [comment, setComment] = useState([]);
	
	
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${commentId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComment(data));
	}, []);
	
	const [url, setUrl] = useState([]);
	useEffect(() => {
		setUrl(fakeURL);
	}, []);
	
	
	
	return (
		<div>
			<h1>PostId: {commentId} all Comments </h1>
			
			{
				// eslint-disable-next-line array-callback-return
				comment.map((comment) =>(
				<div>
					{/* <p>postId: {comment.postId}</p>
					<p>id: {comment.id}</p>
					<p>name : {comment.name}</p>
					<p>email: {comment.email}</p>
					<p>body: {comment.body}</p> */}
					
				{
					
					url.map(uid => (
						
					(uid.id === comment.id)? <img className="img" src={uid.url} alt="" /> : <></>
					
					))
					
				}
				

					<Card sx={{ maxWidth: '100%' }}>
				<CardMedia
					height="140"
				/>
				<CardContent>
				
					<Typography gutterBottom variant="h5" component="div">
					Name: {comment.name}
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
					ID: {comment.id}
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
					PostID: {comment.postId}
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
					E-mail: {comment.email}
					</Typography>
					<Typography variant="body2" color="text.secondary">
					Comment Body: {comment.body}
					</Typography>
				</CardContent>
				<CardActions>
				
				</CardActions>
				</Card>
				
				</div>	
				))
			}
		</div>
	);
};

export default Comments;
