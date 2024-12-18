import { useEffect, useState, useCallback } from "react";
import { Card } from "react-bootstrap";
import { FaPen, FaPlus } from "react-icons/fa";
import { myKey } from "./ProfilePage";
import { useDispatch, useSelector } from "react-redux";

import { addExperienceAction } from "../redux/actions";
import AddExperienceForm from "./FormForExperience";
import EditorFormExperience from "./EditorFormExperience";

const ProfileExperiences = () => {
	const [showForm, setShowForm] = useState(false);
	const [showEditorForm, setShowEditorForm] = useState(false);
	const [experienceID, setExperienceID] = useState(null);
	const [editorForm, setEditorForm] = useState(null);

	const dispatch = useDispatch();
	const state = useSelector(reduxState => reduxState);

	const getExperiences = useCallback(async () => {
		const listOfExperiences = `https://striveschool-api.herokuapp.com/api/profile/${state.profile.users._id}/experiences`;
		try {
			const call = await fetch(listOfExperiences, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${myKey}`,
				},
			});
			if (call.ok) {
				const response = await call.json();
				console.log(response);
				dispatch(addExperienceAction(response));
			} else {
				console.log(`Error: ${call.status} - ${call.statusText}`);
			}
		} catch (error) {
			console.log(error);
		}
	}, [state.profile.users._id, dispatch]);

	useEffect(() => {
		getExperiences();
	}, [getExperiences]);

	const handleExperienceAdded = () => {
		getExperiences();
		setShowForm(false);
	};

	return (
		<>
			{state.profile.experiences.length === 0 && (
				<div>
					<Card className="pt-3 mt-2">
						<div className="px-4 d-flex justify-content-between">
							<div>
								<h1 className="fs-4 m-0">Non ci sono esperienze</h1>
							</div>
							<div className="d-flex">
								<div className="pen d-flex align-items-center me-3">
									<button
										className="text-decoration-none pen border-0 bg-transparent"
										onClick={() => setShowForm(true)} // Mostra il form
									>
										<FaPlus className="custom-hover" />
									</button>
								</div>
							</div>
						</div>
						<div className="d-flex px-4 pb-3">
							<p className="fs-6 fw-medium text-primary  m-0">
								Aggiungi una nuova esperienza per farti notare dai recruiter
							</p>
						</div>
					</Card>
				</div>
			)}
			{state.profile.experiences &&
				state.profile.experiences.map(exp => (
					<div key={exp._id}>
						<Card className="pt-3 mt-2">
							<div className="px-4 d-flex justify-content-between">
								<div>
									<h1 className="fs-4 m-0">{exp.role}</h1>
								</div>
								<div className="d-flex">
									{/* Bottone per aggiungere una nuova esperienza */}
									<div className="pen d-flex align-items-center me-3">
										<button
											className="text-decoration-none pen border-0 bg-transparent"
											onClick={() => setShowForm(true)} // Mostra il form
										>
											<FaPlus className="custom-hover" />
										</button>
									</div>
									<div className="pen">
										<button
											className="text-decoration-none pen border-0 bg-transparent"
											onClick={() => {
												setShowEditorForm(true);
												setExperienceID(exp._id);
												setEditorForm({
													role: exp.role,
													company: exp.company,
													startDate: exp.startDate,
													image: exp.image,
													endDate: exp.endDate,
													description: exp.description,
													area: exp.area,
												});
											}} // Mostra il form
										>
											<FaPen className="custom-hover" />
										</button>
									</div>
								</div>
							</div>
							<div className="d-flex px-4 pb-3">
								<div>
									<img
										src={exp.image}
										width="70px"
										height="70px"
										alt="profile-pic"
									/>
								</div>
								<div className="px-2 d-flex flex-column justify-content-between">
									<p className="fs-6 fw-medium text-primary  m-0">
										Presso {exp.company} , {exp.area}
									</p>
									<p className="fs-6 fw-lightpb-2 m-0">{exp.description}</p>
								</div>
							</div>
						</Card>
					</div>
				))}
			{/* Form posizionato fuori dal map */}
			{showForm && (
				<AddExperienceForm
					showForm={showForm}
					setShowForm={setShowForm}
					handleExperienceAdded={handleExperienceAdded}
				/>
			)}
			{showEditorForm && (
				<EditorFormExperience
					id={experienceID}
					showEditorForm={showEditorForm}
					setShowEditorForm={setShowEditorForm}
					handleExperienceAdded={handleExperienceAdded}
					editorForm={editorForm}
				/>
			)}
		</>
	);
};

export default ProfileExperiences;
