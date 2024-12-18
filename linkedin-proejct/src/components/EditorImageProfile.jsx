import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditorImageProfile = ({
	show,
	setShow,
	setImageProfile,
	setFormData,
	formData,
}) => {
	const handleChange = e => {
		const { name, files } = e.target;
		setFormData({ ...formData, [name]: files[0] });
	};

	return (
		<>
			<Modal
				show={show}
				onHide={() => setShow(false)}
				centered
				keyboard={true}
				style={{ backgroundColor: "rgba(200, 200, 200, 0.7)" }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modifica immagine del profilo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={setImageProfile}>
						{/* immagine */}
						<Form.Group controlId="image" className="mt-3">
							<Form.Label>Immagine</Form.Label>
							<Form.Control
								type="file"
								name="profile"
								onChange={handleChange}
								placeholder="URL Immagine"
								accept="image/*"
							/>
						</Form.Group>

						{/* Bottone di invio */}
						<Button variant="success" type="submit" className="mt-4 w-100">
							Modifica immagine
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditorImageProfile;
