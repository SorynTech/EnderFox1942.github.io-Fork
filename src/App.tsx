import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Modal } from './components/Modal';
import { features, exteriorImages, interiorImages, pricingOptions } from './data';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features features={features} />
      <Gallery 
        title="Exterior Views"
        subtitle="Beautiful coastal setting with private outdoor space"
        images={exteriorImages}
        onImageClick={openModal}
        className="exterior-section"
      />
      <Gallery 
        title="Interior Spaces"
        subtitle="Comfortable and modern living areas"
        images={interiorImages}
        onImageClick={openModal}
        sectionId="gallery"
        className="interior-section"
      />
      <Pricing options={pricingOptions} />
      <Contact />
      <Modal imageSrc={modalImage} onClose={closeModal} />
    </div>
  );
}

export default App;
