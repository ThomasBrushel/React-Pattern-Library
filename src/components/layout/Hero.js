import React from 'react';

const Hero = (props) => {

  const { 
    src, 
    altText, 
    heroTitle,
    textHeadingColor,
    textLeadColor,
    textLeadSize,
    textHeadingSize,
    heroIntro,
    heroTextPosition 
  } = props;
  
  return (
    <div>
      <div className="hero">
        <img src={ src } alt={ altText }/>
        <div className="container">
          <div className={`hero-text ${heroTextPosition}`}>
            <h1 className={`mo-text--${textHeadingSize}`} style={{color: `${textHeadingColor}`}}>{ heroTitle }</h1>
            <p className={`mo-text--${textLeadSize}`} style={{color: `${textLeadColor}`}}>{ heroIntro }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  textHeadingSize: "md",
  textLeadSize: "sm"
};

export default Hero;