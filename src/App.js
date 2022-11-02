import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>CodeKings</h1>
          <Link to="/">Home</Link>
          <Link to="/Users">Users</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>

        </nav>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
