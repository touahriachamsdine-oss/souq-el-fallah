import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';

// Pages
import Landing from './pages/Landing';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketplace from './components/Marketplace';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Traceability from './components/Traceability';
import ProducerProfile from './components/ProducerProfile';
import TrustExplorer from './components/TrustExplorer';
import BackgroundAnimation from './components/BackgroundAnimation';
import AuthForms from './components/AuthForms';
import FarmerDashboard from './components/FarmerDashboard';
import Checkout from './components/Checkout';

const ProtectedRoute = ({ children, role }) => {
    const { user } = useApp();
    if (!user) return <Navigate to="/login" />;
    if (role && user.role !== role) return <Navigate to="/" />;
    return children;
};

function AppContent() {
    return (
        <div className="min-h-screen bg-slate-50 font-outfit selection:bg-dz-green selection:text-white">
            <BackgroundAnimation />
            <Navbar />
            <main className="relative pt-24 pb-12">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/trace/:id" element={<Traceability />} />
                    <Route path="/producer/:id" element={<ProducerProfile />} />
                    <Route path="/trust" element={<TrustExplorer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                    <Route path="/login" element={<AuthForms mode="login" />} />
                    <Route path="/signup" element={<AuthForms mode="signup" />} />
                    <Route path="/dashboard" element={
                        <ProtectedRoute role="farmer">
                            <FarmerDashboard />
                        </ProtectedRoute>
                    } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <AppProvider>
            <Router>
                <AppContent />
            </Router>
        </AppProvider>
    );
}

export default App;
