import "./App.css";
import Navbar from "./components/Navbar";
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
    </>
    );
}

export default App;
