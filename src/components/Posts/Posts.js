import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate} from 'react-router-dom';


const Posts = (props) => {
	// console.log(props.post.id);
	const {title, body, id} = props.post;
	// We used 'useNavigate' hook here to navigate the dynamic pieces of the URL.
	 const navigate = useNavigate()
	const handleClick = (postId) => {
		const url = `/post/${postId}`;
		navigate(url);
		
	};
	
	return (

		// <div>
		// 	<h3>{title}</h3>
		// 	<p>{body}</p>
		// 	<p><Link  to={`/post/${id}`}><button>Read More</button></Link></p>
			
		// </div>
		  
			 <Card sx={{ maxWidth: '100%' }}>
				<CardMedia
					
					height="140"
					
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
					Post Title: {title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
					Post Body: {body}
					</Typography>
				</CardContent>
				<CardActions>
				<Link  to={`/post/${id}`}><Button size="small">Read More</Button></Link> 
				<Button onClick={() => handleClick(id)} size="small">See More</Button>
				</CardActions>
				</Card>
				
		
	);
};

export default Posts;
