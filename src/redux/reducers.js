import { combineReducers } from "redux";

const user = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload; // this assumes that the user passed into the action.payload is an object
    case "UNSET_USER":
      let newState = [...state];
      newState.splice(action.payload, 1); //this will remove the user at that index from state
      return;
    default:
      return state;
  }
};

const appointments = (state = [], action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return [...state, action.payload];
    case "REMOVE_APPOINTMENT":
      console.log("got to appointments reducer, remove_appointments");
      console.log("action payload is ", action.payload);
      console.log("state", state);
      const newState = [...state];
      newState.splice(action.payload, 1);
      console.log("newState", newState);
      return newState;
    default:
      return state;
  }
};

const loggedInBool = (state = null, action) => {
  switch (action.type) {
    case "SET_LOGGEDINBOOL":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ user, appointments, loggedInBool });
