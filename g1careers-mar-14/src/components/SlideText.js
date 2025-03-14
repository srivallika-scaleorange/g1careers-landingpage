import React from 'react';

function SlideText() {
  // Using a smaller list for better performance
  const textItems = [
    'Warehouse',
    'Hospitality',
    'Manufacturing', 
    'Special Events',
    'General Labor',
    'Warehouse',
    'Hospitality',
    'Manufacturing',
    'Special Events',
    'General Labor'
  ];

  return (
    <div className="slide-text">
      <div className="text-inner">
        <ul className="text-list">
          {/* First set of items */}
          {textItems.map((item, index) => (
            <li key={`first-${index}`}>{item}</li>
          ))}
          {/* Duplicate set for seamless looping */}
          {textItems.map((item, index) => (
            <li key={`second-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SlideText;