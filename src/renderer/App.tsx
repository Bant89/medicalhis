import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ThemeProvider from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/pages/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
