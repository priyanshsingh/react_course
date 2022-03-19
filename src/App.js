import "./App.css";
import Navbar from "./components/Navbar";
import SlideButton from "./components/SlideButton";
function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
      <br/>
      <br/>
      <SlideButton/>
    </>
    );
}

export default App;
