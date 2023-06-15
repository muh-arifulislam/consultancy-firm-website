import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./scenes/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
