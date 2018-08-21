import React from 'react';
import Hero from '../layout/Hero';
import Button from '../layout/Button';
import Accordion from '../layout/Accordion';

 const Components = () => {
  return (
    <div>
      <Hero 
        src="https://source.unsplash.com/random"
        altText="My Cool random image"
        heroTextPosition="is-center"
        heroTitle="something"
        heroIntro="This is a small tagline of some sort"/>

      <div className="container">
        <Accordion 
          panelText="Something special about yourself..."
          text="lorem ipsum dolla dolla bills yall" />

        <Accordion 
          accordionBrand="accordion-outline"
          panelText="Something special about yourself..."
          text="lorem ipsum dolla dolla bills yall" />

        <Button text="Click Me" 
                href="https://www.google.com"
                buttonBrand="btn-main"
                buttonTarget="_blank"/>
                
        <Button text="Warning"
                href="http://thomasbrushel.com"
                buttonBrand="btn-warning"/>
        <Button text="Disabled"
                href="http://thomasbrushel.com"
                buttonBrand="btn-disabled"/>
      </div>
      
    </div>
  )
}

export default Components;