import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <BrowserRouter basename="/nova">
      <Routes>
         <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
