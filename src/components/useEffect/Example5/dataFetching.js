import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
	const [id, setId] = useState(1);
	// const [posts, setPosts] = useState([]);¹
	const [post, setPost] = useState({});
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => console.warn(err));
	}, [idFromButtonClick]);
	// Fetch post id ²
	function handleClick() {
		setIdFromButtonClick(id);
	}

	return (
		<>
			<br />
			<h3>Fetching data (useEffect)</h3>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			{/* Fetch post id onClick ² */}
			<button type="button" onClick={handleClick}>
				Fetch post
			</button>
			<h4>{post.title}</h4>
			<br />
			{/* <ul> ¹
				{posts.map((post) => (
					<>
						<li key={post.id}>{post.title}</li>
						<br />
					</>
				))}
			</ul> */}
			<hr />
		</>
	);
}

export default DataFetching;
