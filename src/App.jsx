
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import DynamicCategory from "./pages/categories/DynamicCategory";

function App() {
  return (
    <>
      {/* <div className='bg-red-500'>
      asdasd
     </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dynamicCategory" element={<DynamicCategory />} />
        </Routes>
    </>
  );
}

export default App;
