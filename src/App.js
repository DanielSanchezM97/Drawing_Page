import "./App.css";
import { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

function App() {
  const canvasRef = useRef(null);
  const secondCanvas = useRef(null);

  const SaveCanvas = () => {
    const canvas = canvasRef.current.getSaveData();
    console.log(canvas);
    secondCanvas.current.loadSaveData(canvas);
  };

  const ClearCanvas = () => {
    canvasRef.current.clear();
  };

  return (
    <div className="App">
      <button onClick={SaveCanvas}>Save and Reply Canvas</button>
      <button onClick={ClearCanvas}>Clear Canvas</button>
      <CanvasDraw
        ref={canvasRef}
        className="firstCanvas"
        brushRadius={8}
        style={{ width: "100%" }}
      />
      <CanvasDraw
        className="secondCanvas"
        hideGrid={true}
        disabled={true}
        ref={secondCanvas}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default App;
