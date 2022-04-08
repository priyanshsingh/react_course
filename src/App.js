import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";
// import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
// import BasicForm from "./components/BasicForm";
// import UnderstandingHooks from "./components/UnderstandingHooks";
// import UseStateHook from "./components/UseStateHook";
function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" contactUs = "Contact Us"/>
      <br/>
      {/* <div className="container my-3">
        <TextForm heading = "Enter text to analyze"/>   
      </div> */}

      <div className="container">
        {/* <Carousel/> */}
        <About/>
        <Modal/>
      </div>


      {/* <div  className="container my-3">
        <SlideButton/>      
      </div>
      <div  className="container my-3">
        <Form/>      
      </div> */}

      {/* <BasicForm/> */}
      {/* <UnderstandingHooks/> */}

      {/* <UseStateHook/> */}
    </>
    );
}

export default App;
