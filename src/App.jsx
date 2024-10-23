import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OverviewCounter from './components/OverviewCounter/OverviewCounter';
import Vision from './components/Vision/Vision';
import Banner from './components/BannerSection/Banner';
import Banner2 from './components/BannerSection/Banner2';
import VideoBanner from './components/VideoBanner/VideoBanner';
import BlogPage from './components/Blogs/BlogPage';
import Footer from './components/Footer/Footer';
import Support from './components/Support/Support';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Donate from './components/Donate/Donate';
import Events from './components/Events/Events';
import Volunteer from './components/Volunteer/Volunteer'; // Import the Volunteer component
import About from './components/About/About';

const App = () => {
  return (
    <Router> {/* Wrap everything inside the Router */}
      <main className='overflow-x-hidden dark:bg-gray-900 bg-white'>
        <Navbar />
        {/* Define Routes */}
        <Routes>
          {/* Main Landing Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <OverviewCounter />
                <Vision />
                <Banner /> 
                <Banner2 />
                <VideoBanner />
                <Support />
                <Events />
                <BlogPage />
              </>
            }
          />
          
          <Route path="/donate" element={<Donate />} />
          
          <Route path="/volunteer" element={<Volunteer />} />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
