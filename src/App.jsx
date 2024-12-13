import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

 import Footer from "./Components/Footer"
  import Header from "./Components/Header"
  import Home from "./Components/Home"
   import SearchComp from "./Components/SearchComp"
function App() {
  return (
    <div>
       <Router>

      <Header/> 
      
       <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/search" element={<SearchComp />} /> {/* Search page */}
      </Routes>
      <Footer/>
      
      </Router>
    </div>
  )
}

export default App