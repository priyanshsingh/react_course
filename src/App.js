import "./App.css";
// import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import SlideButton from "./components/SlideButton";
import TextForm from "./components/TextForm";
// import SlideButton from "./components/SlideButton";
function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
      <br/>
      <div className="container my-3">
        <TextForm heading = "Enter text to analyze"/>   
      </div>

      {/* <div  className="container my-3">
        <SlideButton/>      
      </div>
      <div  className="container my-3">
        <Form/>      
      </div> */}

    </>
    );
}

export default App;
