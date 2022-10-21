import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import Dark from "./Components/Dark";
function App() {
  return (
    <>
      {/* <Dark /> */}
      <Navbar title="Text Editor" />
      <Textform innerText="Analyze your Text" />
    </>
  );
}

export default App;
