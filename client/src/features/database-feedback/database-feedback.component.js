import React from "react";
import Toast from "../../ui-kit/toast";

export const DatabaseFeedback = (placeholder) => {
	if (placeholder) {
 	 	return <Toast type="success">Thank you for submitting a review for [Location Name]!</Toast>
	} else {
		return <Toast type="error">Sorry, there seems to be a network error. Make sure you're online and try submitting again.</Toast>  
	}
};

 