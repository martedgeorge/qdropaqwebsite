import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import WhyQdropaq from './pages/WhyQdropaq.jsx';
import Process from './pages/Process.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/why-qdropaq" element={<WhyQdropaq />} />
        <Route path="/process" element={<Process />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
