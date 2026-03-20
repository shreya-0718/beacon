import React from 'react';
import './styles/TextSection.css';

export const TextSection = ({ children }) => {
  return (
    <section className="text-section">
      {children}
    </section>
  );
};