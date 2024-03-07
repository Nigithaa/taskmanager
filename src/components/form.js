import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import '../App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    desc: "",
    time: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const eventsCollection = collection(firestore, 'events');
      await addDoc(eventsCollection, formData);

      setFormData({
        name: "",
        date: "",
        location: "",
        desc: "",
        time: "",
        status: false,
      });

      console.log("Event added to Firestore successfully");
    } catch (error) {
      console.error("Error adding event to Firestore: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" />
      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-input" />
      <label>Description:</label>
      <textarea name="desc" value={formData.desc} onChange={handleChange} className="form-input"></textarea>
      <label>Time:</label>
      <input type="text" name="time" value={formData.time} onChange={handleChange} className="form-input" />
      <label>Event Status:</label>
      <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} />
      <button type="submit" className="submit-btn">Add Event</button>
    </form>
  );
};

export default Form;
