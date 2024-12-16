import { FaEye, FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { BsFileBarGraph } from "react-icons/bs";
import { Card } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
const ProfileAnalitics = () => {
	return (
		<Card className="pt-3 mt-2">
			<div className="px-4">
				<h1 className="fs-4 m-0">Analisi</h1>
				<p className="m-0 pb-2">
					<FaEye /> Solo per te
				</p>
			</div>
			<div className="d-flex flex-column flex-md-row">
				<div className=" ps-4 pe-2 d-flex ">
					<HiUsers className="fs-2" />
					<div className="px-2 analisi">
						{" "}
						<h3>x visualizzazioni del profilo</h3>
						<p>Scopri chi ha visitato il tuo profilo.</p>
					</div>
				</div>
				<div className="ps-4 ps-md-2 pe-2 mb-2  d-flex ">
					<BsFileBarGraph className="fs-2" />
					<div className="px-2 analisi ">
						<h3>x impressioni dei post</h3>
						<p className="m-0">Crea un post per aumentare l'interesse</p>
						<p className="m-0">Ultimi 7 giorni.</p>
					</div>
				</div>
				<div className="ps-4 ps-md-2 pe-4 d-flex ">
					<FaSearch className="fs-2" />
					<div className="px-2 analisi ">
						<h3>x comparse nei motori di ricerca</h3>
						<p>Vedi quante volte compari nei risultati di ricerca.</p>
					</div>
				</div>
			</div>
			<p className="custom-hover m-0  border-top w-100 fw-medium d-flex align-items-center justify-content-center">
				Mostra tutte le analisi{" "}
				<span className="pen">
					<FaArrowRightLong className="ms-2" />
				</span>
			</p>
		</Card>
	);
};

export default ProfileAnalitics;
