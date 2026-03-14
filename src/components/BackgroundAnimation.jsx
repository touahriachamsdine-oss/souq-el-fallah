import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-dz-green/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-dz-gold/5 blur-[120px] rounded-full animate-pulse transition-all duration-[10s]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-[20%] left-[80%] w-32 h-32 border border-dz-green/10 rounded-full animate-bounce transition-all duration-[15s]" style={{ animationDuration: '20s', animationDelay: '-5s' }} />
      <div className="absolute top-[60%] left-[10%] w-48 h-48 border border-dz-gold/10 rounded-[40px] rotate-45 animate-spin-slow" />
      <div className="absolute bottom-[20%] left-[70%] w-24 h-24 bg-dz-green/5 rounded-full blur-xl animate-pulse" />
      
      {/* Grid Pattern with fading edges */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
};

export default BackgroundAnimation;
