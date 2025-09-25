import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="p-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

