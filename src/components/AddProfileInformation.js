import React, { useState } from "react";
import { addUser } from "../firebase";
import { useSelector } from "react-redux";

function AddProfileInformation() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useSelector((state) => state.auth);

  const submitHandle = async (e) => {
    e.preventDefault();
    await addUser({
      name,
      title,
      experience,
      description,
      uid: user.uid,
    });
  };

  return (
    <>
    <form onSubmit={submitHandle}>
      <div className="mb-3">
        <label className="form-label">Name-Surname</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Frontend Developer"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Expreince (year)</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary me-5">
        Submit
      </button>
    </form>
  </>
  );
}

export default AddProfileInformation;
