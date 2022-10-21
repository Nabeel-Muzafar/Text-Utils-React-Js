import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");

  const handleonchange = (event) => {
    // console.log("change");
    setText(event.target.value);
  };

  const toUppercase = () => {
    // console.log(text);
    let newText = text;
    setText(newText.toUpperCase());
  };

  const toClear = () => {
    let newText = " ";
    setText(newText);
  };

  const tolowercase = () => {
    // console.log(text);
    let newText = text;
    setText(newText.toLowerCase());
  };

  const toCapitalizecase = () => {
    // console.log(text);
    let newText = text;
    let words = newText.split(" ");

    const ntext = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    // console.log(words);
    setText(ntext);
  };

  const toCopy = () => {
    let copyText = text;
    // console.log(copyText);

    navigator.clipboard.writeText(copyText);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3 my-5">
          <h2>{props.innerText}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleonchange}
            placeholder="Enter Text Here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toUppercase}>
          UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={tolowercase}>
          LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={toCapitalizecase}>
          Capitalize
        </button>

        <button className="btn btn-primary mx-2" onClick={toClear}>
          Clear
        </button>

        <button className="btn btn-primary mx-2" onClick={toCopy}>
          Copy Text
        </button>
      </div>
      <div className="container">
        <h2 className="my-2">Test Editor Meta Data</h2>
        <p className="my-2">Total Characters : {text.length}</p>
        <p className="my-2">
          Word Count : {text.split(" ").filter((word) => word !== "").length}
        </p>
      </div>
    </>
  );
}
