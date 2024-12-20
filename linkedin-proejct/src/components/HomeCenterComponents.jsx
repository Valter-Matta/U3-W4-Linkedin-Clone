import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

export default function HomeCenterComponent() {
	const [posts, setPosts] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [newPost, setNewPost] = useState({
		text: "",
		image: "",
	});
	const [imageFile, setImageFile] = useState(null);
	const [comments, setComments] = useState({});
	const [newComment, setNewComment] = useState({}); // Stato per i nuovi commenti separati per post
	const [rating, setRating] = useState({}); // Stato per il rating separato per post
	const profileState = useSelector(reduxState => reduxState.profile.users);
	const state = useSelector(state => state);

	useEffect(() => {
		if (showModal) {
			document.body.classList.add("modal-open");
		} else {
			document.body.classList.remove("modal-open");
		}
	}, [showModal]);

	useEffect(() => {
		fetchPosts();
	}, []);

	useEffect(() => {
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
		}
		fetchComments();
	}, [state.profileKey.key, newComment]);

	const fetchPosts = () => {
		fetch("https://striveschool-api.herokuapp.com/api/posts/", {
			headers: {
				Authorization: `Bearer ${state.profileKey.key}`,
			},
		})
			.then(response => response.json())
			.then(data => {
				setPosts(data.reverse());
			})
			.catch(error => console.error("Errore nel recuperare i post:", error));
	};

	const handlePostSubmit = async () => {
		try {
			const postResponse = await fetch(
				"https://striveschool-api.herokuapp.com/api/posts",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${state.profileKey.key}`,
					},
					body: JSON.stringify({ text: newPost.text }),
				},
			);

			if (!postResponse.ok) throw new Error("Errore nella creazione del post");

			const createdPost = await postResponse.json();

			if (imageFile) {
				const formDataToSend = new FormData();
				formDataToSend.append("post", imageFile);

				const imageResponse = await fetch(
					`https://striveschool-api.herokuapp.com/api/posts/${createdPost._id}`,
					{
						method: "POST",
						headers: {
							Authorization: `Bearer ${state.profileKey.key}`,
						},
						body: formDataToSend,
					},
				);

				if (!imageResponse.ok)
					throw new Error("Errore nel caricamento immagine");
			}

			console.log("Post creato con successo!");
			fetchPosts();
			setShowModal(false);
			setNewPost({ text: "", image: "" });
			setImageFile(null);
		} catch (error) {
			console.error("Errore nel creare il post:", error);
			alert("Si è verificato un errore. Riprova!");
		}
	};

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
				fetchPosts(); // Ricarica i post per ottenere il nuovo commento
				setNewComment({ ...newComment, [postId]: { text: "" } }); // Reset del testo del commento
				setRating({ ...rating, [postId]: 0 }); // Reset del rating
			} else {
				alert("Errore nell'invio del commento");
			}
		} catch (error) {
			console.error("Errore nel commentare:", error);
			alert("Si è verificato un errore nel commento");
		}
	};

	return (
		<div style={{ borderRadius: "10px" }}>
			<div
				style={{
					backgroundColor: "white",
					padding: "15px",
					borderRadius: "10px",
					boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
					marginBottom: "15px",
				}}
			>
				<div className="d-flex">
					<Link to="/">
						<img
							src={profileState.image}
							alt="profile"
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
								marginRight: "10px",
							}}
						/>
					</Link>

					<input
						type="text"
						placeholder="Crea un post"
						style={{
							width: "100%",
							padding: "10px",
							borderRadius: "20px",
							border: "1px solid #ccc",
							marginBottom: "10px",
						}}
						onClick={() => setShowModal(true)}
					/>
				</div>

				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<span style={{ cursor: "pointer", color: "#0073b1" }}>
						📷 Contenuti multimediali
					</span>
					<span style={{ cursor: "pointer", color: "#0073b1" }}>📅 Evento</span>
					<span style={{ cursor: "pointer", color: "#0073b1" }}>
						✍️ Scrivi un articolo
					</span>
				</div>
			</div>

			{posts.length > 0 ? (
				posts.map(post => (
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
										src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
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
						<h4
							style={{
								margin: 0,
								overflow: "hidden",
								textOverflow: "ellipsis",
								display: "-webkit-box",
								WebkitLineClamp: 3,
								WebkitBoxOrient: "vertical",
								maxHeight: "4.5em",
								lineHeight: "1.5em",
							}}
						>
							{post.text || "Contenuto non disponibile"}
						</h4>
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
						<hr />

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
												<strong>{comment.author}</strong>:
												<p className="ms-1">{comment.comment}</p>
											</div>
											<div className="d-flex">
												{[1, 2, 3, 4, 5].map(star => (
													<FaRegStar
														key={star}
														className="me-1"
														style={{
															color:
																star <= comment.rate ? "#ffc107" : "#e4e5e9", // Colora stelle in base al rate
														}}
													/>
												))}
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
							<input
								type="text"
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
							<div className="d-flex align-items-center">
								{[1, 2, 3, 4, 5].map(star => (
									<IoStarSharp
										key={star}
										size="18"
										onClick={() => handleRatingChange(post._id, star)}
										style={{
											fill:
												star <= (rating[post._id] || 0) ? "#ffc107" : "#e4e5e9",
											cursor: "pointer",
											marginRight: "5px",
										}}
									/>
								))}
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
				))
			) : (
				<p style={{ textAlign: "center", color: "gray" }}>Caricando...</p>
			)}

			{showModal && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: "1100",
					}}
				>
					<div
						style={{
							backgroundColor: "white",
							padding: "20px",
							borderRadius: "10px",
							width: "400px",
							boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
						}}
					>
						<h3>Crea un post</h3>
						<textarea
							placeholder="Scrivi il tuo post"
							value={newPost.text}
							onChange={e => setNewPost({ ...newPost, text: e.target.value })}
							style={{
								width: "100%",
								padding: "10px",
								borderRadius: "10px",
								border: "1px solid #ccc",
								marginBottom: "10px",
								minHeight: "100px",
							}}
						/>
						<label style={{ cursor: "pointer" }} htmlFor="file">
							<IoMdPhotos style={{ marginRight: "10px", fontSize: "20px" }} />
							Carica un'immagine
						</label>
						<input
							id="file"
							type="file"
							onChange={e => setImageFile(e.target.files[0])}
							style={{
								marginBottom: "10px",
								display: "none",
							}}
						/>

						<div style={{ textAlign: "right" }}>
							<button
								onClick={handlePostSubmit}
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
							<button
								onClick={() => setShowModal(false)}
								style={{
									marginLeft: "10px",
									backgroundColor: "#ccc",
									color: "black",
									padding: "10px 15px",
									borderRadius: "5px",
									border: "none",
									cursor: "pointer",
								}}
							>
								Annulla
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
