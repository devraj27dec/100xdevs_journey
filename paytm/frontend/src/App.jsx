
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Send from "./pages/Send"


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/send" element={<Send/>}/>
      </Routes>
    </Router>
  )
}

export default App
