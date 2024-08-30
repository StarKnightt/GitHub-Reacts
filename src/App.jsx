import React from 'react';
import MemeGenerator from './components/MemeGenerator';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <MemeGenerator />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;