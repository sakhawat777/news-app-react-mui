import React from 'react';
import './App.css';
import Home from './components/Home/Home';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReadMore from './components/ReadMore/ReadMore';
import NoMatch from './components/NoMatch/NoMatch';
import Comments from './components/Comments/Comments';


function App() {
	

	return (
		
		<BrowserRouter>
		<Routes>
		<Route path='/home' element={<Home />} />
			{/* :id - URL Parameter (Dynamic URL Parameter) */}
			<Route path='/post/:postId' element={<ReadMore />} />
			<Route path='/comments/:commentId' element={<Comments/>} />
			<Route path='/' element={<Home />} />
			<Route path='*' element={<NoMatch />} />
		</Routes>
	</BrowserRouter>
	);
}

export default App;
