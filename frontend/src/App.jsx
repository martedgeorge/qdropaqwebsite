import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import WhyQdropaq from './pages/WhyQdropaq.jsx';
import Process from './pages/Process.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import WhoWeServe from './pages/WhoWeServe.jsx';
import Resources from './Resources.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import Services from './pages/Services.jsx';
import Staff from './pages/Staff.jsx';
import Library from './pages/Library.jsx';
import FeesForms from './pages/FeesForms.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/overview" element={<WhoWeAre />} />
        <Route path="/why-qdropaq" element={<WhyQdropaq />} />
        <Route path="/process" element={<Process />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/resources" element={<Resources />} />

        <Route path="/services" element={<Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/library" element={<Library />} />
        <Route path="/fees-forms" element={<FeesForms />} />
      </Route>
    </Routes>
  );
}
