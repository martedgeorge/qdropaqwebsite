import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Process from "@/pages/Process";
import Unique from "@/pages/Unique";
import Fees from "@/pages/Fees";
import Team from "@/pages/Team";
import GettingStarted from "@/pages/GettingStarted";
import Contact from "@/pages/Contact";
import Article from "@/pages/Article";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App" data-testid="app-root">
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/unique" element={<Unique />} />
          <Route path="/fees-and-forms" element={<Fees />} />
          <Route path="/who-we-are" element={<Team />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/what-is-a-qdro" element={<Article />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
