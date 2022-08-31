import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col h-screen overflow-auto bg-gray-200 text-black">
          <Navbar />
        </div>
      </Router>
    </>
  );
}

export default App;
