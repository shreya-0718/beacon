import React, { useState } from 'react';
import './styles/FAQSection.css';

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is Hack Club?',
      answer:
        'Hack Club is a global community of over 105 thousand high schoolers who love coding and building things! Check us out at hackclub.com. Beacon is a Hack Club YSWS!',
    },
    {
      id: 2,
      question: 'What is a YSWS?',
      answer:
        'A YSWS (“You Ship, We Ship”) is a Hack Club program where you ship open-source (we will have more info on shipping requirements later!) technical projects, and in return you earn prizes! Each one is a bit different :)',
    },
    {
      id: 3,
      question: 'When does Beacon start/end?',
      answer:
        'Beacon will be run this summer! Keep an eye out in the #beacon channel on the Hack Club Slack for more info.',
    },
    {
      id: 4,
      question: 'How do I track my progress?',
      answer:
        'You can track your work using Hackatime, Lapse, or by journaling your progress manually.',
    },
    {
      id: 5,
      question: 'How can I earn more rewards?',
      answer:
        'We will have weekly challenges that can earn you more buoys once the YSWS starts!',
    },
    {
      id: 6,
      question: 'Can I use AI?',
      answer:
        'Yes, but very minimally (<30%). We will reject AI slop; make projects to learn things yourself, and ask questions in the Slack if you need help!',
    },
  ];

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const FAQCard = ({ faq }) => (
    <div
      className={`faq-card ${expandedId === faq.id ? 'expanded' : ''}`}
      onClick={() => toggleExpanded(faq.id)}
    >
      <div className="card-header">
        <h3 className="question">{faq.question}</h3>

        <div className="toggle-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M 5 8 L 10 13 L 15 8"
              stroke="#2a4c7a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {expandedId === faq.id && (
        <div className="card-body">
          <p className="answer">{faq.answer}</p>
        </div>
      )}
    </div>
  );

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-grid">
        <div className="faq-column">
          {leftFaqs.map((faq) => (
            <FAQCard key={faq.id} faq={faq} />
          ))}
        </div>

        <div className="faq-column">
          {rightFaqs.map((faq) => (
            <FAQCard key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;