import { connect } from "react-redux";
import Test from "../../components/Test/Test";

import { setTestMsg } from "../../store/actions/index";

export default connect(
  (state) => ({
    msg: state.getIn(["test", "data", "msg"]),
  }),
  (dispatch) => ({
    showMsg: text => () => {
      dispatch(setTestMsg(text))
    }
  })
)(Test);