import PhotoViewer from "./components/PhotosViewer";
import TimeBar from "./components/TimeBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TimeBar />
      <PhotoViewer />
    </div>
  );
}

export default App;
