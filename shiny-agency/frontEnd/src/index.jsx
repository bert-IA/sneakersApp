import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'; // Import depuis pages/Home/index.jsx
import Header from './components/Header';
import Survey from './pages/Survey';
import Error from './components/Error';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import Footer from './components/Footer'
import { ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>

      <ThemeProvider>

        <GlobalStyle />

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/survey/:questionNumber" element={<Survey />} />

          <Route path="/results" element={<Results />} />

          <Route path="/freelances" element={<Freelances />} />

          <Route path="*" element={<Error />} />

        </Routes>

        <Footer />

      </ThemeProvider>

    </Router>

  </React.StrictMode>
);
