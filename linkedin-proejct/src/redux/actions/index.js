export const GET_PROFILE = "GET_PROFILE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
// export const PUSH_ID_USER = "PUSH_ID_USER";

const myProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
const myKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxMzdmMjc0YTg2ODAwMTVkYjU1MTAiLCJpYXQiOjE3MzQ0Mjc5NTIsImV4cCI6MTczNTYzNzU1Mn0.-Wq-ZqeJEtIFi8ja0gV6qQ6OPLtCvtQokH0TsvEc-3o";

export const getmyProfile = p => {
	return async (dispatch, getState) => {
		try {
			const call = await fetch(myProfile, {
				headers: {
					Authorization: `Bearer ${myKey}`,
				},
			});
			if (call.ok) {
				const response = await call.json();
				console.log(response);
				dispatch({ type: GET_PROFILE, payload: response });
			} else {
				console.log(`Error: ${call.status} - ${call.statusText}`);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const addExperienceAction = experience => {
	return {
		type: GET_EXPERIENCE,
		payload: experience,
	};
};
