import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { HomeScreen } from '../pages/HomeScreen';
import { ServicesScreen } from '../pages/ServicesScreen';

const DefaultRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <></>;
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<HomeScreen />} />
        </Route>

        <Route path="/services" element={<ServicesScreen />} />
        <Route path="*" element={<DefaultRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
