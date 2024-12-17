import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./ProfileAside.css";
import ProfileAside from "./components/ProfileAside";
import MyNav from "./components/MyNav";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import HomeMainComponent from "./components/HomeMainComponents";
import { useSelector } from "react-redux";
function App() {
	return (
		<BrowserRouter>
			<header>
				<MyNav />
			</header>
			<main>
				<Container>
					<Routes>
						<Route
							path={`/`}
							element={
								<Row>
									<div className="p-0 col-12 col-lg-8">
										<ProfilePage />
									</div>
									<div className="col-12 col-lg-4">
										<ProfileAside />
									</div>
								</Row>
							}
						></Route>
					</Routes>
				</Container>
				<Routes>
					<Route path="/Home" element={<HomeMainComponent />}></Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
