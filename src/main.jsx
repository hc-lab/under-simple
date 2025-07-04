import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './i18n';
import './styles/global.css'
import './styles/Navbar.css'
import './styles/hero.css'
import './styles/projects.css'
import './styles/about.css'
import './styles/contact.css';
import './styles/proyecto.css';
import './styles/proyecto-hero.css';
import './styles/proyecto-stats.css';
import './styles/proyecto-timeline.css';
import './styles/footer.css'

import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
