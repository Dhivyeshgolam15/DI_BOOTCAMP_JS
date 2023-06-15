// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";

const  App = ()=> {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: '',
    destination: '',
    lactoseFree: false
    });
  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;

   const newValue = type === "checkbox" ? checked : value;

    setFormData((prevValue) => ({
      ...prevValue,
      [name]: newValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const params = new URLSearchParams(formData).toString();
    console.log(params);

    window.location.href = `http://localhost:3000/?${params}`;

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      lactoseFree: false,
      Nuts:false,
      vegan: false
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name"/>
        <br />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name"/>
        <br />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <br />
        <label>
          <input type="radio" name="gender" value="male"  //  checked={formData.gender === "male"} onChange={handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input type="radio" //  checked={formData.gender === "female"}
          name="gender" value="female" onChange={handleChange}
          />
          Female
        </label>
        <br />
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">-- Please Choose a destination --</option>
          <option value="Brazil">Brazil</option>
          <option value="Mauritius">Mauritius</option>
          <option value="France">France</option>
          <option value="England">England</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          Lactose Free

        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          />
          Vegan
          </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="Nuts"
            checked={formData.Nuts}
            onChange={handleChange}
          />
          Nuts free
          </label>

        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {formData.firstName} {formData.lastName}
      </p>
      <p>Your age: {formData.age}</p>
           <p>Your gender: {formData.gender}</p>
      <p>Your destination: {formData.destination}</p>

      <p>
        Your dietary restrictions:
        <br/>
        ** lactoseFree: {formData.lactoseFree ? "yes" : "No"}
        <br />
        ** vegan: {formData.vegan ? "yes" : "No"}
        <br />
        ** Nuts: {formData.Nuts ? "yes" : "No"}
      </p>
    </div>
  );
  };
  export default App;
