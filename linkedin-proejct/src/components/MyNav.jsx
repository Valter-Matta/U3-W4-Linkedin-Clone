import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrLinkedin } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import DropdownProfile from "./DropdownProfile";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function MyNav() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const state = useSelector(state => state);
	const location = useLocation();

	const searcher = async e => {
		const query = e.target.value;
		setSearchQuery(query);

		if (query.length > 0) {
			try {
				const response = await fetch(
					`https://striveschool-api.herokuapp.com/api/profile/`,
					{
						headers: {
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxNGIwOTc0YTg2ODAwMTVkYjU1MjciLCJpYXQiOjE3MzQ0Mjk0NDksImV4cCI6MTczNTYzOTA0OX0.mE5mKRYlk-WIPHgNEPOuGdut9pE2Lh53UeLEQHrDUTI",
						},
					},
				);

				if (!response.ok) {
					throw new Error("Errore durante la richiesta.");
				}

				const data = await response.json();
				const filteredResults = data.filter(profile =>
					profile.username.toLowerCase().includes(query.toLowerCase()),
				);

				setSearchResults(filteredResults);
			} catch (error) {
				console.error("Errore durante la ricerca:", error);
				setSearchResults([]);
			}
		} else {
			setSearchResults([]);
		}
	};

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">
					<GrLinkedin
						style={{ borderRadius: "15%", color: "#0A66C2" }}
						className="fs-1"
					/>
				</Navbar.Brand>
				<input
					style={{ backgroundColor: "#EDF3F8" }}
					type="text"
					className="p-2 border border-none w-25"
					placeholder="Cerca"
					value={searchQuery}
					onChange={searcher}
				/>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-5 w-100 mt-2 d-flex justify-content-around align-items-center">
						<Link
							className={`text-decoration-none py-1 nav-link ${
								location.pathname === "/Home" ? "active" : ""
							} `}
							to="/Home"
						>
							<div className="d-flex flex-column align-items-center ">
								<FaHome className="fs-4" />
								<p className="mb-0">Home</p>
							</div>
						</Link>

						<Link
							to={"*"}
							className={`text-decoration-none py-1 nav-link ${
								location.pathname === "/*" ? "active" : ""
							} `}
						>
							<div className="d-flex flex-column align-items-center ">
								<IoPeople className="fs-4" />
								<p className="mb-0">Rete</p>
							</div>
						</Link>
						<Link
							to="/search"
							className={`text-decoration-none py-1 nav-link ${
								location.pathname === "/search" ? "active" : ""
							} `}
						>
							<div className="d-flex flex-column align-items-center ">
								<MdWork className="fs-4" />
								<p className="mb-0">Lavoro</p>
							</div>
						</Link>
						<Link
							to={"/chat"}
							className={`text-decoration-none py-1 nav-link ${
								location.pathname === "/chat" ? "active" : ""
							} `}
						>
							<div className="d-flex flex-column align-items-center ">
								<BsChatDotsFill className="fs-4" />
								<p className="mb-0">Chat</p>
							</div>
						</Link>
						<Link
							to={"/notifiche"}
							className={`text-decoration-none py-1 nav-link ${
								location.pathname === "/notifiche" ? "active" : ""
							} `}
						>
							<div className="d-flex flex-column align-items-center ">
								<FaBell className="fs-4" />
								<p className="mb-0">Notifiche</p>
							</div>
						</Link>

						<Link
							to={"/"}
							className={`text-decoration-none py-1 nav-link ${
								location.pathname === "/" ? "active" : ""
							} `}
						>
							<div className="d-flex flex-column align-items-center ">
								<FaUser className="fs-4" />
								<p className="mb-0">Profilo</p>
							</div>
						</Link>

						{state.profileKey.key && location.pathname === "/" && (
							<Link className="nav-link text-decoration-none align-self-baseline m-0 p-0">
								<div className="d-flex flex-column align-items-center">
									<DropdownProfile />
								</div>
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
			{searchResults.length > 0 && (
				<div
					style={{
						position: "absolute",
						top: "70px",
						left: "22%",
						backgroundColor: "white",
						border: "1px solid #ccc",
						borderRadius: "20px",
						width: "300px",
						maxHeight: "300px",
						overflowY: "scroll",
						overflowX: "hidden",
						zIndex: 1000,
					}}
				>
					{searchResults.map(result => {
						return (
							<div
								key={result._id}
								style={{
									padding: "10px",
									borderBottom: "1px solid #eee",
									cursor: "pointer",
								}}
							>
								<img src={result.image} width="30px" alt="" />
								<h5>User: {result.username}</h5>
								<p>bio: {result.bio}</p>
								<small>{result.title}</small>
								<p>Email: {result.email}</p>
							</div>
						);
					})}
				</div>
			)}
		</Navbar>
	);
}

export default MyNav;
