import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

import { Navbar } from 'components/Navbar';
import { ContactScreen } from 'pages/ContactScreen';
import { HomeScreen } from 'pages/HomeScreen';
import { PortfolioScreen } from 'pages/PortfolioScreen';
import { ProjectDetailsScreen } from 'pages/ProjectDetails';
import { ServicesScreen } from 'pages/ServicesScreen';

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
          <Route path="/" element={<HomeScreen />} />
          <Route path="portfolio" element={<PortfolioScreen />} />
          <Route path="services" element={<ServicesScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="projects/:query" element={<ProjectDetailsScreen />} />
        </Route>

        <Route path="/services" element={<ServicesScreen />} />
        <Route path="*" element={<DefaultRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
