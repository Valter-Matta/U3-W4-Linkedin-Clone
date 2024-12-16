import { Card } from "react-bootstrap";
import { MdOutlineCancel, MdSecurityUpdateGood } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const ProfileBoard = () => {
	return (
		<Card className="mt-4">
			<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
			<div className="border border-3 border-white">
				<img
					className="rounded-circle border border-3 border-withe ms-3"
					src="https://placecats.com/100/100"
				></img>
			</div>
			<Card.Body className="pb-0">
				<Card.Title className="d-flex align-items-center ">
					Nome utente{" "}
					<div className="ms-3">
						<span className="d-flex align-items-center fs-6 text-primary border border-1 rounded-4 border-primary p-1 px-2">
							<MdSecurityUpdateGood /> Aggiungi badge di verifica
						</span>
					</div>
				</Card.Title>
				<div className="d-flex justify-content-between">
					<div>
						<Card.Text className="m-0">Competenze | Competenze | ...</Card.Text>
						<Card.Text className="pb-2">
							Posizione &middot;{" "}
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
					<h3 className="fs-6 d-flex justify-content-between pe-2 mb-0">
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
