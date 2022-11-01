import "./App.css";
import Information from "./Information";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";

import Formtry from "./Formtry";

const App = () => {


  const [form, setForm] = useState({
    name: "",
    lastname: "",
    nickname: "",
    email: "",
    password: "",
    city: "",
    address: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  return (
  
      
      <Routes>
        <Route path="/" element={<Formtry form={form} handleChange={handleChange}/>}/>
        <Route path="information" element={<Information form={form}/>}/>
      </Routes>

  );
};

export default App;
