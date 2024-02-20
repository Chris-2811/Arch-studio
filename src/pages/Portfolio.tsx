import React from 'react';
import Gallery from '@/components/Portfolio/gallery/Gallery';
import { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="myContainer">
      <Gallery />
    </div>
  );
}

export default Portfolio;
