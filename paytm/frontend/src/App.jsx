import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Send from "./pages/Send"
import Hero from "./pages/Hero"
import { AuthProvider} from "./context/useAuth"
function App() {

  return(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/send" element={<Send/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
