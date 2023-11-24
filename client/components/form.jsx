import { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // Making a post request to the server
    await fetch("http://localhost:3000/add", {
      method: "POST",
      // Headers provide metadata/information about the data you're sending.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, text }),
    });

    // Clearing the form
    setUsername("");
    setText("");
  }

  return (
    <>
      <div className="container mt-1">
        <div className="alert alert-primary" role="alert">
          Please enter a username that describes you the best and text you want
          to share...
          <br />
          <strong>Keep in mind not to share your original name</strong>
        </div>
        <form onSubmit={handleSubmit} className={styles.form + "mt-5"}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={username}
              type="text"
              name="username"
              className="form-control"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We will never share your original name with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Text
            </label>
            <input
              value={text}
              type="text"
              name="text"
              className="form-control"
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
