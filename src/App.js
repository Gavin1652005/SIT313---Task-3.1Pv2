import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Header from './components/Header';
import Banner from './components/Banner'; 
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner /> 
      <FeaturedArticles />
      <FeaturedTutorials />
       <Footer />
    </div>
  );
}

export default App;

