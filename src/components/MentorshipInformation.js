import React, { useEffect, useState } from "react";
import { addUser, storage } from "../firebase";
import { useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function MentorshipInformation() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [file, setFile] = useState("");

  const { user } = useSelector((state) => state.auth);

  const submitHandle = async (e) => {
    e.preventDefault();
    await addUser({
      name,
      title,
      experience,
      description,
      img,
      uid: user.uid,
    });
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg((prev) => ({ ...prev, downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);


  return (
    <>
      <div className="container mt-5">
        <div className="p-5 mb-4 bg-secondary bg-opacity-50 rounded-3">
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <img
            className="rounded"
            style={{ width: "280px" }}
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="input-group-text" htmlFor="file">
            Upload
          </label>
        </div>
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
      </div>
      </div>
    </>
  );
}

export default MentorshipInformation;
