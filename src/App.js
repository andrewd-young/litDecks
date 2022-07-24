import "./App.css";
import Home from "./Home";
import Learn from "./Learn";

let learnTest = false;

function App() {
  if(learnTest)
  {
  return (
    <div className="mx-auto my-auto w-3/4 h-3/4">
        <Learn />
    </div>
  );
  }
  else{
    return (
      <div className="mx-auto my-auto w-3/4 h-3/4">
          <Home />
      </div>
    );
  }
}

export default App;
