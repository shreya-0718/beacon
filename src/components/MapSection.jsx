import React, { useEffect, useRef, useState } from 'react';
import './styles/MapSection.css';
import boatImg from '../images/boat.png';

import keeper1 from '../images/keeper-map/stage-1.png';
import keeper2 from '../images/keeper-map/stage-2.png';
import keeper3 from '../images/keeper-map/stage-3.png';
import keeper4 from '../images/keeper-map/stage-4.png';

import sailor1 from '../images/sailor-map/stage-1.png';
import sailor2 from '../images/sailor-map/stage-2.png';
import sailor3 from '../images/sailor-map/stage-3.png';
import sailor4 from '../images/sailor-map/stage-4.png';

const stagesData = {
  keeper: [
    { img: keeper1, caption: 'Spark an Idea', scale: 1 },
    { img: keeper2, caption: 'Build Your Project', scale: 1.3 },
    { img: keeper3, caption: 'Write your Tutorial', scale: 1.2 },
    { img: keeper4, caption: 'Ship and Publish!', scale: 1.4 },
  ],
  sailor: [
    { img: sailor1, caption: 'Choose a Topic', scale: 1 },
    { img: sailor2, caption: 'Pick a Tutorial to Follow', scale: 2 },
    { img: sailor3, caption: 'Build and Log Hours!', scale: 1.3 },
    { img: sailor4, caption: '- Ship! - ', scale: 1.4 },
  ],
};

const positions = [
  { top: 50, left: 50 },    
  { top: 90, left: 460 },  
  { top: 220, left: 40 },  
  { top: 308, left: 522 }  
];

const MapSection = ({ selectedPath }) => {
  const mapRef = useRef(null);
  const boatRef = useRef(null);
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    setMapVisible(true);

    const handleScroll = () => {
      if (!mapRef.current || !boatRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPercent = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );

      const path = mapRef.current.querySelector('path');
      if (path) {
        const pathLength = path.getTotalLength();
        const point = path.getPointAtLength(pathLength * scrollPercent);
        boatRef.current.style.transform = `translate(${point.x - 20}px, ${point.y - 20}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPath]);

  const stages = selectedPath ? stagesData[selectedPath] : [];

  return (
    <div className={`map-section ${mapVisible ? 'visible' : ''}`} ref={mapRef}>
      {!selectedPath && (
        <div className="map-placeholder">
          Press the buttons above to see something cool here!
        </div>
      )}
      {selectedPath && (
        <svg className="map-path" viewBox="0 0 600 400">
  <path
    d={`
      M50,50
      C50,50 350,30 450,100   
      C500,150 250,150 100,250   
      C250,400 400,350 550,350  
    `}
    stroke="#000000"
    strokeWidth="4"
    fill="none"
    strokeDasharray="8,8"
  />
</svg>
      )}

      {selectedPath && <img src={boatImg} alt="boat" className="boat" ref={boatRef} />}

      {stages.map((stage, idx) => {
        const pos = positions[idx];
        return (
            <div
            key={idx}
            className="map-stage"
            style={{ top: pos.top, left: pos.left }}
            >
            <img
                src={stage.img}
                alt={`Stage ${idx + 1}`}
                style={{
                transform: `scale(${stage.scale})`,
                transformOrigin: 'center center',
                }}
            />
            <div className="map-caption">{stage.caption}</div>
            </div>
        );
    })}
    </div>
  );
};

export default MapSection;