import { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FaPen, FaRegStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function ProfileActivities() {
	const [posts, setPosts] = useState([]);

	const state = useSelector(state => state);
	const userID = useSelector(state => state.profile.users._id);

	const [rating, setRating] = useState({});
	const [comments, setComments] = useState({});
	const [newComment, setNewComment] = useState({});

	const fetchPosts = () => {
		fetch("https://striveschool-api.herokuapp.com/api/posts/", {
			headers: {
				Authorization: `Bearer ${state.profileKey.key}`,
			},
		})
			.then(response => response.json())
			.then(data => {
				setPosts(data.reverse());
				console.log(posts);
			})
			.catch(error => console.error("Errore nel recuperare i post:", error));
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchComments = useCallback(
		async function fetchComments() {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					headers: {
						Authorization: `Bearer ${state.profileKey.key}`,
					},
				},
			);
			if (response.ok) {
				const data = await response.json();

				const commentsByPostId = data.reduce((acc, comment) => {
					(acc[comment.elementId] = acc[comment.elementId] || []).push(comment);
					return acc;
				}, {});
				setComments(commentsByPostId);
			}
		},
		[state.profileKey],
	);
	useEffect(() => {
		fetchComments();
	}, [fetchComments, newComment]);

	const handleCommentChange = (postId, e) => {
		setNewComment({
			...newComment,
			[postId]: { ...newComment[postId], text: e.target.value },
		});
	};

	const handleRatingChange = (postId, rate) => {
		setRating({
			...rating,
			[postId]: rate,
		});
	};

	const handleCommentSubmit = async postId => {
		const commentData = {
			comment: newComment[postId]?.text || "",
			rate: rating[postId] || 0,
			elementId: postId,
		};

		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${state.profileKey.key}`,
					},
					body: JSON.stringify(commentData),
				},
			);

			if (response.ok) {
				fetchPosts();
				setNewComment({ ...newComment, [postId]: { text: "" } });
				setRating({ ...rating, [postId]: 0 });
			} else {
				alert("Errore nell'invio del commento");
			}
		} catch (error) {
			console.error("Errore nel commentare:", error);
			alert("Si è verificato un errore nel commento");
		}
	};

	return posts
		.filter(post => post.user._id === userID)
		.map(post => (
			<div
				key={post._id}
				style={{
					backgroundColor: "white",
					padding: "10px",
					borderRadius: "10px",
					boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
					marginBottom: "15px",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginBottom: "10px",
					}}
				>
					<div>
						<div className="d-flex align-items-center">
							<img
								src={post.user.image}
								alt="profile"
								style={{
									width: "50px",
									height: "50px",
									borderRadius: "50%",
									marginRight: "10px",
								}}
							/>
							<h4 style={{ margin: 0 }}>
								{post.username || "Utente sconosciuto"}
							</h4>
						</div>

						<p style={{ margin: 0, color: "gray", fontSize: "12px" }}>
							{post.createdAt
								? new Date(post.createdAt).toLocaleDateString()
								: "Data non disponibile"}
						</p>
					</div>
				</div>
				<p
					style={{
						margin: 0,
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
						maxHeight: "4.5em",
						lineHeight: "1.5em",
						color: "gray",
					}}
				>
					{post.text || "Contenuto non disponibile"}
				</p>
				{post.image && (
					<img
						src={post.image}
						alt="post"
						style={{
							width: "100%",
							marginTop: "10px",
							borderRadius: "10px",
						}}
					/>
				)}
				<div>
					<h5>Commenti:</h5>
				</div>
				{comments[post._id] && comments[post._id].length > 0 ? (
					<div style={{ marginTop: "15px" }}>
						{comments[post._id].map(comment => (
							<div
								key={comment._id}
								style={{ padding: "5px 0", borderBottom: "1px solid #ccc" }}
							>
								<div className="d-flex flex-column">
									<div className="d-flex">
										<strong>{comment.author}</strong>:<p>{comment.comment}</p>
									</div>
									<div className="d-flex">
										<p>{comment.rate}</p>
										<FaRegStar className="text-warning" />
									</div>
									<small>
										{new Date(comment.createdAt)
											.toLocaleString("it-IT", {
												timeZone: "Europe/Rome",
												year: "numeric",
												month: "long",
												day: "numeric",
												hour: "2-digit",
												minute: "2-digit",
												second: "2-digit",
											})
											.slice(0, -3)}
									</small>
								</div>
							</div>
						))}
					</div>
				) : (
					<p style={{ color: "gray", fontStyle: "italic" }}>
						Nessun commento disponibile
					</p>
				)}
				<div style={{ marginTop: "15px" }}>
					<textarea
						placeholder="Scrivi il tuo commento"
						value={newComment[post._id]?.text || ""}
						onChange={e => handleCommentChange(post._id, e)}
						style={{
							width: "100%",
							padding: "10px",
							borderRadius: "10px",
							border: "1px solid #ccc",
							marginBottom: "10px",
							minHeight: "50px",
						}}
					/>
					<div className="d-flex">
						<input
							type="number"
							placeholder="Rating"
							value={rating[post._id] || ""}
							onChange={e => handleRatingChange(post._id, e.target.value)}
							style={{
								width: "60px",
								padding: "5px",
								borderRadius: "5px",
								marginRight: "10px",
								border: "1px solid #ccc",
							}}
						/>
						<button
							onClick={() => handleCommentSubmit(post._id)}
							style={{
								backgroundColor: "#0073b1",
								color: "white",
								padding: "10px 15px",
								borderRadius: "5px",
								border: "none",
								cursor: "pointer",
							}}
						>
							Pubblica
						</button>
					</div>
				</div>
			</div>
		));
}
