import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Research from './pages/Research.jsx';
import Dataset from './pages/Dataset.jsx';
import MethodologyPage from './pages/MethodologyPage.jsx';
import Model from './pages/Model.jsx';
import Prediction from './pages/Prediction.jsx';
import Results from './pages/Results.jsx';
import Publication from './pages/Publication.jsx';

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main className="relative isolate overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/model" element={<Model />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/results" element={<Results />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
