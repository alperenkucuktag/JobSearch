import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Joblist from "./pages/Joblist";
import Addjob from "./pages/Addjob";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Joblist />} />
        <Route path='/add-job' element={<Addjob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
