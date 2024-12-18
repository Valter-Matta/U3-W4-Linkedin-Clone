import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { myKey } from "./ProfilePage";
import { useSelector } from "react-redux";
import { useState } from "react";

const EditorFormExperience = ({
	handleExperienceAdded,
	showEditorForm,
	setShowEditorForm,
	id,
	editorForm,
}) => {
	const userID = useSelector(reduxState => reduxState.profile.users._id);

	const selectedExperience = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${id}`;

	const [formData, setFormData] = useState(editorForm);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const editExperience = async e => {
		e.preventDefault();
		try {
			const response = await fetch(selectedExperience, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${myKey}`,
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Esperienza aggiunta con successo:");
				setShowEditorForm(false);
				setFormData({
					role: "",
					company: "",
					startDate: "",
					image: "",
					endDate: "",
					description: "",
					area: "",
				});
				handleExperienceAdded();
			} else {
				console.error("Errore nell'invio:", response.statusText);
			}
		} catch (error) {
			console.error("Errore richiesta:", error);
		}
	};

	return (
		<>
			<Modal
				show={showEditorForm}
				onHide={() => setShowEditorForm(false)}
				centered
				keyboard={true}
				style={{ backgroundColor: "rgba(200, 200, 200, 0.7)" }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Aggiungi una nuova esperienza</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={editExperience}>
						{/* Ruolo */}
						<Form.Group controlId="role">
							<Form.Label>Ruolo</Form.Label>
							<Form.Control
								type="text"
								name="role"
								value={formData.role}
								onChange={handleChange}
								placeholder="Inserisci il ruolo"
							/>
						</Form.Group>

						{/* Azienda */}
						<Form.Group controlId="company" className="mt-3">
							<Form.Label>Azienda</Form.Label>
							<Form.Control
								type="text"
								name="company"
								value={formData.company}
								onChange={handleChange}
								placeholder="Inserisci l'azienda"
							/>
						</Form.Group>

						{/* Data di inizio */}
						<Form.Group controlId="startDate" className="mt-3">
							<Form.Label>Data di Inizio</Form.Label>
							<Form.Control
								type="date"
								name="startDate"
								value={formData.startDate}
								onChange={handleChange}
							/>
						</Form.Group>

						{/* Data di fine */}
						<Form.Group controlId="endDate" className="mt-3">
							<Form.Label>Data di Fine (opzionale)</Form.Label>
							<Form.Control
								type="date"
								name="endDate"
								value={formData.endDate}
								onChange={handleChange}
							/>
						</Form.Group>

						{/* Descrizione */}
						<Form.Group controlId="description" className="mt-3">
							<Form.Label>Descrizione</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="description"
								value={formData.description}
								onChange={handleChange}
								placeholder="Descrivi la tua esperienza"
							/>
						</Form.Group>

						{/* immagine */}
						<Form.Group controlId="image" className="mt-3">
							<Form.Label>Descrizione</Form.Label>
							<Form.Control
								name="image"
								value={formData.image}
								onChange={handleChange}
								placeholder="Inserisci un Immagine"
							/>
						</Form.Group>

						{/* Area */}
						<Form.Group controlId="area" className="mt-3">
							<Form.Label>Area</Form.Label>
							<Form.Control
								type="text"
								name="area"
								value={formData.area}
								onChange={handleChange}
								placeholder="Es. Milano"
							/>
						</Form.Group>

						{/* Bottone di invio */}
						<Button variant="success" type="submit" className="mt-4 w-100">
							Invia Esperienza
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditorFormExperience;
