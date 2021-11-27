import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Posts = (props) => {
	const {title, body} = props.post;
	
	
	return (
		
			 <Card sx={{ maxWidth: '100%' }}>
				<CardMedia
					
					height="140"
					
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
					{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
					{body}
					</Typography>
				</CardContent>
				<CardActions>
					
				<Button  size="small">Read More</Button> 
				</CardActions>
				</Card>
		
	);
};

export default Posts;
