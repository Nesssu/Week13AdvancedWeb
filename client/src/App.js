import './App.css';
import Home from './pages/Home'
import Books from './pages/Books';
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/book/:name" element={<Books/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
