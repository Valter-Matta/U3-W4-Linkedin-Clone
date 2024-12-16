import { Col, Container, Row } from "react-bootstrap";
import ProfileBoard from "./ProfileBoard";
import "../assets/CssProfilePage.css";
import ProfileAnalitics from "./ProfileAnalitics";
import ProfileActivities from "./ProfileActivities";
import ProfileExperiences from "./ProfileExperiences.jsx";

const ProfilePage = () => {
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<ProfileBoard />
					<ProfileAnalitics />
					<ProfileActivities />
					<ProfileExperiences />
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default ProfilePage;
