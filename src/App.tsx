import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturedSection from './components/FeaturedSection';
import CategorySection from './components/CategorySection';
import LatestArticles from './components/LatestArticles';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedSection />
        <CategorySection />
        <LatestArticles />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;