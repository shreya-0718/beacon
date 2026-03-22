import { useState } from 'react';

import Hero from '../components/Hero';

import KeeperSailorSection from '../components/KeeperSailorSection';
import MapSection from '../components/MapSection';
import FAQSection from '../components/FAQSection';

function Home() {
  console.log('Home component rendering');
  const [selectedPath, setSelectedPath] = useState(null);

  console.log('selectedPath:', selectedPath);

  return (
    <div className="home-page">

      <Hero />
      <KeeperSailorSection onPathSelect={setSelectedPath} />
      <MapSection selectedPath={selectedPath}/>
      <FAQSection/>
    </div>
  );
}

export default Home;