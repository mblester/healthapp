import { connect } from "react-redux";
import Table from "../Components/Table";
import { removeAppointment } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAppointment: (idx) => dispatch(removeAppointment(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
