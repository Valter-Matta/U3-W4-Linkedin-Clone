import { Card } from "react-bootstrap";
import { MdOutlineCancel, MdSecurityUpdateGood } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { myProfile, getmyProfile } from "../redux/actions";
import { useEffect, useState } from "react";
import EditorImageProfile from "./EditorImageProfile";

const ProfileBoard = () => {
	const state = useSelector(reduxState => reduxState.profile.users);
	const key = useSelector(state => state.profileKey.key);

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

	const [formData, setFormData] = useState({
		profile: "",
	});

	const [profileImage, setProfileImage] = useState(state.image);

	const setImageProfile = async e => {
		e.preventDefault();
		const formDataToSend = new FormData();
		formDataToSend.append("profile", formData.profile);

		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${state._id}/picture`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${key}`,
					},
					body: formDataToSend,
				},
			);

			if (response.ok) {
				console.log("foto modifcata con successo");

				const updatedImageUrl = `${state.profile}?${new Date().getTime()}`;
				setProfileImage(updatedImageUrl);
				setShow(false);
				setFormData({ profile: "" });
			} else {
				console.error("Errore nell'invio:", response.statusText);
			}
		} catch (error) {
			console.error("Errore richiesta:", error);
		}
	};

	useEffect(() => {
		getmyProfile();
		dispatch({
			type: "SET_PHOTO",
			payload: profileImage,
		});
	}, [profileImage]);

	return (
		<Card className="mt-4">
			{show && (
				<EditorImageProfile
					show={show}
					setShow={setShow}
					setImageProfile={setImageProfile}
					setFormData={setFormData}
					formData={formData}
				/>
			)}
			<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
			<div className=" position-relative w-25 border border-3 border-white">
				<img
					className="rounded-circle border border-3 border-withe ms-3"
					src={
						state.profile
							? `${state.profile}?${new Date().getTime()}`
							: state.image
					}
					width="150px"
					height="150px"
				></img>
				<div className="pen profile position-absolute bottom-0 start-50">
					<button
						onClick={() => {
							setShow(true);
						}}
						className=" text-decoration-none pen border-0 bg-transparent"
					>
						<FaPen className="custom-hover" />
					</button>
				</div>
			</div>
			<Card.Body className="pb-0">
				<Card.Title className="d-flex align-items-center ">
					{state.name} {state.surname}
					<div className="ms-3">
						<span className="d-flex align-items-center fs-6 text-primary border border-1 rounded-4 border-primary p-1 px-2">
							<MdSecurityUpdateGood /> Aggiungi badge di verifica
						</span>
					</div>
				</Card.Title>
				<div className="d-flex justify-content-between">
					<div>
						<Card.Text className="m-0">
							{state.title} | {state.bio}{" "}
						</Card.Text>
						<Card.Text className="pb-2">
							{state.area} &middot;{" "}
							<span className="text-primary">Informazioni di contatto</span>{" "}
						</Card.Text>
					</div>
					<div className="d-none d-md-block">
						<img className="" src="https://placecats.com/30/30"></img>
						<span>Azienda S.r.l</span>
					</div>
				</div>
				<div className="profile-button d-flex flex-wrap">
					<button className="bg-primary flex-grow-1 text-white fw-bold rounded-5 border-0 px-2 ">
						Disponibile per
					</button>
					<button className="bg-white text-primary fw-bold border border-2 rounded-5 border-primary px-2">
						Aggiungi sezione del profilo
					</button>
					<button className=" d-md-none bg-white text-black-50 fw-bold border border-2 rounded-5 border-dark-subtle px-2">
						<HiDotsHorizontal />
					</button>
					<button className="bg-white flex-grow-1 text-primary fw-bold border border-2 rounded-5 border-primary px-2">
						Migliora profilo
					</button>
					<button className="d-none d-md-block bg-white text-black-50 fw-bold border border-2 rounded-5 border-dark-subtle px-2">
						Risorse
					</button>
				</div>
			</Card.Body>
			<Card.Body className="d-flex flex-column flex-md-row justify-content-between m-0 p-0 pb-3 px-4">
				<div className="p-2 bg-black me-md-2 mb-2 mb-md-0  bg-opacity-25 me-0  rounded-3  board-info">
					<h3 className="fs-6 d-flex justify-content-between align-items-center pe-2 mb-0">
						Disponibile a lavorare{" "}
						<span className="pen">
							<FaPen className="custom-hover" />
						</span>
					</h3>
					<p className="m-0">Ruoli ....</p>
					<a className="text-decoration-none fw-medium text-primary" href="#">
						Mostra dettagli
					</a>
				</div>
				<div className=" m-0  p-2 d-flex flex-column justify-content-between border rounded-3 board-info">
					<div className=" expertselection d-flex justify-content-between  ">
						<h3 className="fs-6   mb-0 ">
							Fai sapere che stai facendo una selezione{" "}
							<span className=" fw-normal ">
								e attrai <br /> candidati qualificati.
							</span>
						</h3>
						<span className="pen w-auto d-flex justify-content-center ">
							<MdOutlineCancel className="fs-4" />
						</span>
					</div>
					<a className="text-decoration-none fw-medium text-primary" href="#">
						Inizia
					</a>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProfileBoard;
