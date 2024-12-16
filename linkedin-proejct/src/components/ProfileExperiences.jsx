import { Card } from "react-bootstrap";
import { FaPen, FaPlus } from "react-icons/fa";

const ProfileExperiences = () => {
	return (
		<Card className="pt-3 mt-2">
			<div className="px-4 d-flex justify-content-between ">
				<div>
					<h1 className="fs-4 m-0">Esperienze</h1>
				</div>
				<div className="d-flex ">
					<div className="pen d-flex align-items-center me-3 ">
						<FaPlus className="custom-hover " />
					</div>
					<div className="pen">
						<FaPen className="custom-hover" />
					</div>
				</div>
			</div>
			<div className="d-flex px-4">
				<div>
					<img src="https://placedog.net/50/50" alt="" />
				</div>
				<div className="px-2 d-flex flex-column justify-content-between ">
					<p className=" fs-6 fw-medium text-primary pb-2 m-0">x follower</p>
					<p className="m-0 fw-semibold">Non hai ancora pubblicato nulla</p>
					<p className="m-0 pb-2">i post che condividi appariranno qui</p>
				</div>
			</div>
		</Card>
	);
};

export default ProfileExperiences;
