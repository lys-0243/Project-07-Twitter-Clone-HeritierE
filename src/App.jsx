import Home from "./pages/home.jsx";

import { BrowserRouter ,Routes ,Route } from "react-router-dom";


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
