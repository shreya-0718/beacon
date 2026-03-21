import React, { useState } from 'react';
import './styles/KeeperSailorSection.css';

const KeeperSailorSection = ({ onPathSelect }) => {
  const [selectedPath, setSelectedPath] = useState(null);

  const handleKeeperClick = () => {
    setSelectedPath('keeper');
    onPathSelect('keeper');
  };

  const handleSailorClick = () => {
    setSelectedPath('sailor');
    onPathSelect('sailor');
  };

  return (
    <div className="ks-section-wrapper">
      
      <div className="ks-header">
        <b>Choose a Path:</b>
      </div>

      <section className="ks-section">
        <div className="ks-cards">

          <div className={`ks-card ${selectedPath === 'keeper' ? 'selected' : ''}`}>
            <div className="my-row">
              <h3 className="ks-title">A Keeper</h3>
              <img src={'src/images/lighthouse.png'} alt="Keeper" className="ks-img" />
            </div>

            <p className="ks-desc">
              As a Keeper, you choose something you want to learn — React, Godot, a hardware topic,
              anything you're excited about. Once you ship your project (with at least 2 hours{' '}
              <a href="https://hackatime.hackclub.com" target="_blank" rel="noopener noreferrer">
                Hackatime-d
              </a>,{' '}
              <a href="https://lapse.hackclub.com" target="_blank" rel="noopener noreferrer">
                Lapse-d
              </a>, or Journaled — we'll have a guide for that!), you'll earn buoys.
              They can be redeemed in the Beacon Market for super cool prizes!
            </p>

            <p className="ks-desc">
              You can also write a tutorial about what you learned for Sailors to follow. Tutorials
              are optional, but writing one unlocks extra rewards and places your very own lighthouse
              on the coastline map.
            </p>

            <button className="ks-btn" onClick={handleKeeperClick}>
              Choose Keeper Path
            </button>
          </div>

          <div className="ks-divider">— OR —</div>

          <div className={`ks-card ${selectedPath === 'sailor' ? 'selected' : ''}`}>
            <div className="my-row">
              <h3 className="ks-title">A Sailor</h3>
              <img src={'src/images/boat.png'} alt="Sailor" className="ks-img" />
            </div>

            <p className="ks-desc">
              As a Sailor, you follow a Keeper's tutorial and build something of your own. Completing
              a tutorial (with your own twist added, of course!) earns you buoys too — plus you help that Keeper's lighthouse. It's a great
              way to explore new skills and maybe even become a Keeper yourself!
            </p>

            <p className="ks-desc">
              Track your progress using{' '}
              <a href="https://hackatime.hackclub.com" target="_blank" rel="noopener noreferrer">
                Hackatime
              </a>{' '}
              or{' '}
              <a href="https://lapse.hackclub.com" target="_blank" rel="noopener noreferrer">
                Lapse
              </a>, or by journaling your work, just like Keepers do.
            </p>

            <button className="ks-btn" onClick={handleSailorClick}>
              Choose Sailor Path
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default KeeperSailorSection;