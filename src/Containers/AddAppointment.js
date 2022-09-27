import { connect } from "react-redux";
import AddAppointment from "../Components/AddAppointment";
import { addAppointment } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    // loggedInBool: state.loggedInBool,
    // user: state.user,
    appointments: state.appointments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAppointment: (appointment) => dispatch(addAppointment(appointment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAppointment);
