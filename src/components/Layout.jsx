import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
    return (
        <div className="min-h-screen bg-luxury-black text-white selection:bg-amber-glow selection:text-black font-sans">
            <Navbar />
            <main>
                <Hero />
                {/* Sections will go here */}
                <div id="about" className="h-[50vh]" /> {/* Placeholder for scroll testing */}
            </main>
        </div>
    )
}

export default App;
