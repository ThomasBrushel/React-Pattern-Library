import React from 'react';

const Hero = (props) => {

  const { 
    src, 
    altText, 
    heroTitle, 
    heroIntro,
    heroTextPosition 
  } = props;

  return (
    <div>
      <div className="hero">
        <img src={ src } alt={ altText }/>
        <div className="container">
          <div className={`hero-text ${heroTextPosition}`}>
            <h1>{ heroTitle }</h1>
            <p>{ heroIntro }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;