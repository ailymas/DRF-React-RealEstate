import logo from "./logo.svg";
import "./App.css";
import Propertylistpage from "./pages/Propertylistpage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>hello world</h1>
        <Route path="./properties" component={Propertylistpage} />
      </div>
    </Router>
  );
}
 
export default App;
