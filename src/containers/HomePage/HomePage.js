import { connect } from "react-redux";
import HomePage from "../../components/HomePage/HomePage";

import { getGithub, changeUserId } from "../../store/actions/index";

export default connect(
  state => ({
    userId: state.getIn(["github", "userId"]),
  }),
  dispatch => ({
    onChangeUserId: event => {
      dispatch(changeUserId(event.target.value))
    },
    onSubmitUserId: userId => () => {
      dispatch(getGithub(userId))
    }
  })
)(HomePage);
