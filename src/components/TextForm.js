import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        console.log("OnUpCLick");
        setText(newtext);
    } 
    
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        console.log("OnLoCLick");

        setText(newtext);
    } 
    
    const handleClearText = () => {
        let newtext = "";
        console.log("OnClear");

        setText(newtext);
    } 
    
    const handleOnChange = (event) => {
        console.log("OnChange of type");
        setText(event.target.value);
    } 

    const [text, setText] = useState("");

    return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary:</h1>
        <p>{text.split(" ").length} words and {text.length-((text.split(" ").length)-1)} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read!</p>
        <br/>
        <h2>Preview:</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
