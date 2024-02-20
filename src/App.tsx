import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Portfolio, Contact } from './pages';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="h-full flex flex-col justify-between">
        <Header></Header>
        <main className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
