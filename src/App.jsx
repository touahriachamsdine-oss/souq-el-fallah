import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import AuthForms from './components/AuthForms';
import FarmerDashboard from './components/FarmerDashboard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-dz-green/20 selection:text-dz-green">
          <Navbar />
          <main className="pb-20">
            <Routes>
              <Route path="/" element={<Marketplace />} />
              <Route path="/login" element={<AuthForms mode="login" />} />
              <Route path="/signup" element={<AuthForms mode="signup" />} />
              <Route path="/dashboard" element={<FarmerDashboard />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-dz-lightGreen">Souq El Fallah</h3>
                <p className="text-slate-400 text-sm">Empowering Algerian farmers and delivering freshness to every home.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Marketplace</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>Dairy Products</li>
                  <li>Fresh Meat</li>
                  <li>Honey & Sweets</li>
                  <li>Fruits & Veggies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>Help Center</li>
                  <li>Farm Verification</li>
                  <li>Shipping Info</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Admin Divisions</h4>
                <p className="text-slate-400 text-sm">Supporting all 58 Wilayas across Algeria.</p>
                <div className="mt-4 flex space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-dz-green"></div>
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                  <div className="w-8 h-8 rounded-full bg-dz-red"></div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
              © 2026 Souq El Fallah. Made for Algeria with ❤️.
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
