import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./route/Layout";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
function App() {
  const [employees, setEmployees] = useState();

  const fetchEmployee = async () => {
    const data = await axios.get("http://127.0.0.1:4040/employee");
    // console.log(data.data);
    setEmployees(data.data);
  };
  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <AppContext.Provider value={{ employees, setEmployees }}>
      <Navbar />
      <Layout />
    </AppContext.Provider>
  );
}
export default App;
export { AppContext };
