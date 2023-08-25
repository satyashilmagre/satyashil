import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import Chatbot from './page/Chatbot'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chatbot" element={<Chatbot />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
