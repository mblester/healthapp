export const addAppointment = (newAppointment) => {
    return {
      type: "ADD_APPOINTMENT",
      payload: newAppointment
    }
  }

  export const removeAppointment = (index) => {
    return{
      type: "REMOVE_APPOINTMENT",
      payload: index
    }
  }

  export const setUser = (newUser) => {
    return {
      type: "SET_USER",
      payload: newUser
    }
  }
  
  export const unsetUser = (index) => {
    return {
      type: "UNSET_USER",
      payload: index
    }
  }
  
  export const setLoggedInBool = (bool) => {
    return {
      type: "SET_LOGGEDINBOOL",
      payload: bool
    }
  }