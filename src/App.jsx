
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';


const App = () => {
  const design = (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/blog" element={<h1>Welcome to Blog</h1>} />
            <Route exact path="/courses" element={<h1>Welcome to Courses</h1>} />
            <Route exact path="/software-engineering" element={<h1>Welcome to software engineering</h1>} />
            <Route exact path="/web-development" element={<h1>Welcome to web development</h1>} />
            <Route exact path="/robotics" element={<h1>Welcome to robotics</h1>} />
            <Route exact path="/contact-us" element={<h1>Welcome to contacts</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  );
  return design;
}

export default App;