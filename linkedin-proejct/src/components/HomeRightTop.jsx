import React from "react";
import "../assets/HomeRightTop.css";

const HomeRightTop = () => {
	return (
		<div className="sidebar2 p-3 ">
			<div className="featured ">
				<h3>In primo piano</h3>
				<p className="subtitle">a cura di LinkedIn Notizie</p>
				<ul className="news-list">
					<li>
						<span className="news-title">Tech 2025</span>
						<span className="news-meta">6 giorni fa • 1.366 lettori</span>
					</li>
					<li>
						<span className="news-title">Ruffini</span>
						<span className="news-meta">3 giorni fa • 388 lettori</span>
					</li>
					<li>
						<span className="news-title">Revolut</span>
						<span className="news-meta">21 ore fa • 283 lettori</span>
					</li>
					<li>
						<span className="news-title">Maximall Pompei</span>
						<span className="news-meta">22 ore fa • 184 lettori</span>
					</li>
					<li>
						<span className="news-title">Big Ideas 2025</span>
						<span className="news-meta">11 giorni fa • 4.248 lettori</span>
					</li>
				</ul>
				<a href="#" className="view-more">
					Vedi altro ▾
				</a>
			</div>
			<div className="games ">
				<h4>I giochi di oggi</h4>
				<div className="game">
					<span
						className="game-icon"
						style={{ backgroundColor: "#f2f2f2" }}
					></span>
					<span className="game-name">Tango</span>
					<span className="game-description">Armonizza la griglia</span>
				</div>
				<div className="game">
					<span
						className="game-icon"
						style={{ backgroundColor: "#d8d8ff" }}
					></span>
					<span className="game-name">Queens</span>
					<span className="game-description">Incorona ogni regione</span>
				</div>
			</div>
		</div>
	);
};

export default HomeRightTop;
