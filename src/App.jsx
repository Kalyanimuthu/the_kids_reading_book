// App.jsx
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SchoolsPage from './pages/SchoolsPage';
import LibraryPage from './pages/LibraryPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const location = useLocation();
  const path = location.pathname;


  const whiteBgRoutes = ['/library', '/pricing', '/about', '/login', '/signup'];
  const pageBg = whiteBgRoutes.includes(path) ? 'bg-white' : 'bg-[#03194F]';


  return (
    <div className={`min-h-screen text-white font-inter ${pageBg}`}>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

