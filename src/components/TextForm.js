import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked");
    // setText("You have clicked on handeUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The text has been converted to upper case", "success");
  };

  const handleLowClick = () => {
    console.log("Upper case was clicked");
    // setText("You have clicked on handeUpClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The text has been converted to lower case", "success");
  };

  const handleClearClick = () => {
    // console.log("Upper case was clicked");
    // setText("You have clicked on handeUpClick");
    let newText = "";
    setText(newText);
    props.showAlert("The text has been cleared", "success");
  };

  const handleCopy = () => {
    // Get the textfield
    let copyText = document.getElementById("myBox");
    // Select the text field
    copyText.select();
    // Copy the text inside the field
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("The text has been copied", "success");
  };

  const handleExtraSpaces = () => {
    let newString = text.replace(/\s+/g, " ").trim();
    setText(newString);
    props.showAlert("Extra spaces has been removed from the text", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
      </div>
      <div className="container">
        <textarea
          className="form-control"
          id="myBox"
          rows={8}
          aria-label="With textarea"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#042542",
          }}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="container my-2">
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words, {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
