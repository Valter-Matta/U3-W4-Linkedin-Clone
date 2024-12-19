import { Card } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ProfileActivities = () => {
	return (
		<Card className="pt-3 mt-2">
			<div className="px-4 d-flex justify-content-between ">
				<div>
					<h1 className="fs-4 m-0">Attività</h1>
				</div>
				<div className="d-flex align-items-center">
					<button className="fw-medium px-2 bg-transparent border border-primary text-primary rounded-5 me-3">
						Crea un post
					</button>
					<span className="pen">
						<FaPen className="custom-hover " />
					</span>
				</div>
			</div>
			<div className="px-4 d-flex flex-column justify-content-between ">
				<p className=" fs-6 fw-medium text-primary pb-2 m-0">
					{Math.floor(Math.random() * 10)} follower
				</p>
				<p className="m-0 fw-semibold">Non hai ancora pubblicato nulla</p>
				<p className="m-0 pb-2">i post che condividi appariranno qui</p>
			</div>
			<p className="custom-hover m-0 py-2 border-top w-100 fw-medium d-flex align-items-center justify-content-center">
				Mostra tutte le analisi <FaArrowRightLong className="ms-2" />
			</p>
		</Card>
	);
};

export default ProfileActivities;
