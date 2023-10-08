import "./App.css";
// import { Home } from "./components/admin/Home";
// import AllPurchase from "./components/purchase/AllPurchase";
import CreatePurchase from "./components/purchase/CreatePurchase";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pay from "./Pay";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Pay />} />
    //   </Routes>
    // </Router>
    // <>
    <CreatePurchase />
    //   <AllPurchase />
    // </>
    // <Home />
  );
}

export default App;
