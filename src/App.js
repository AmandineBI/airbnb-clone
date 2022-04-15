import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './style.css'
import data from './data/data.js'; // .js extension is the extension by default, thus it is not needed.

function App() {
    const cards = data.map(data => {
        return (
            <Card
                key={data.id}
                {...data}
            />
        )
    })
  return (
      <div>
           <Navbar />
           <Hero />
           <section className="cards-list">
                {cards}
           </section>
      </div>
  );
}

export default App;
