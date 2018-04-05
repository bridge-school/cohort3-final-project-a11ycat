import { connect } from "react-redux";
import { DatabaseFeedback } from "./database-feedback.component";

const mapStateToProps = state => ({
	
});

export const DatabaseFeedbackContainer = connect(mapStateToProps)(DatabaseFeedback);
