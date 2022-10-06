import { useState, useEffect } from "react";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://capstone-backend-jet.vercel.app/api/appointments"
      );
      const json = await data.json();
      setAppointments(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
