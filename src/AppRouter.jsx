import { Route, Routes } from 'react-router-dom';
import App from './App';
import PortfolioPage from './pages/portfolio';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default AppRouter;
