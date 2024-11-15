import Home from "./pages/home/Home"
import Posts from "./pages/posts/Posts"
import Category from "./pages/category/Category";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TechStack from "./pages/tech-stack/TechStack";
import Projects from "./pages/projects/Projects";
import Personal from "./pages/personal/Personal";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/categories/:name" element={<Category />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  )
}

export default App
