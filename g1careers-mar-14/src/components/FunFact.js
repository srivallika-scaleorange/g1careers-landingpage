// src/components/FunFact.jsx
import React from 'react';

function FunFact() {
  const facts = [
    { count: 12, symbol: 'k', text: 'Freelance Workers' },
    { count: 95, symbol: '%', text: 'Jobs Fulfillment Rate' },
    { count: 12, symbol: 'k+', text: 'Jobs Filled' },
    { count: 825, symbol: '+', text: 'Satisfied Businesses' }
  ];

  return (
    <section className="funfact-section centred pb_90">
      <div className="auto-container">
        <div className="row clearfix">
          {facts.map((fact, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 funfact-block" key={index}>
              <div className="funfact-block-one">
                <div className="inner-box">
                  <div className="count-outer">
                    <span className="odometer" data-count={fact.count}>{fact.count}</span>
                    <span className="symble">{fact.symbol}</span>
                  </div>
                  <p>{fact.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunFact;