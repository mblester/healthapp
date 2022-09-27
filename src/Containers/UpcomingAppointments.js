import { connect } from "react-redux";
import UpcomingAppointments from "../Components/UpcomingAppointments";
import { addAppointment, removeAppointment } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAppointment: (appointment) => dispatch(addAppointment(appointment)),
    removeAppointment: (idx) => dispatch(removeAppointment(idx)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingAppointments);
