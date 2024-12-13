
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Hero from "./pages/Hero";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blog/:id" element={<Blog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
