import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          
          {/* Featured Stats Section */}
          <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Local Producers", value: "2500+" },
                  { label: "Fresh Daily", value: "100%" },
                  { label: "Active Users", value: "50k+" },
                  { label: "Cities Covered", value: "48" }
                ].map((stat, idx) => (
                  <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:shadow-xl transition-all duration-500">
                    <p className="text-4xl lg:text-5xl font-black text-emerald-600 mb-2">{stat.value}</p>
                    <p className="text-slate-500 dark:text-slate-400 font-bold tracking-tight uppercase text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ProductShowcase />

          {/* CTA Section */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="bg-emerald-600 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden group">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                    Start Your Fresh Farm Journey Today
                  </h2>
                  <p className="text-emerald-50 text-xl lg:text-2xl font-medium mb-12 opacity-90 leading-relaxed">
                    Connecting Algeria's citizens with quality agriculture. Trusted by thousands across all 58 wilayas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="px-10 py-5 bg-white text-emerald-600 font-black rounded-3xl text-lg hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1">
                      Download Mobile App
                    </button>
                    <button className="px-10 py-5 bg-emerald-700 text-white font-black rounded-3xl text-lg hover:bg-emerald-800 transition-all border border-emerald-500/30">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
