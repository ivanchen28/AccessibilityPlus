import '../../App.css';
import '../StripItem.css'
import React from 'react';
import StripItem from '../StripItem';

function Demos() {
  return (
    <>
      <div className='standard-page'>
        <h1 className='header'>All Demos</h1>
        <p>
          Our demos are intended to give readers a better understanding of various types of disabilities and impairments that affect people from using technology such as the Internet and computer applications. We strive to provide an interactive element whenever possible to see and feel what using computers can be like for these users, and demonstrate how developers can make their products more accessible by implementing certain design strategies. Feel free to explore!
        </p>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/cognitive-impairment/main-card.jpg"
            title='Cognitive Impairment'
            text="Cognitive impairment can come from a variety of disorders, conditions, and freak accidents. Users suffering from this disability may experience memory loss, difficulty understanding contents, and may be neuroatypical."
            path='/demos/cognitive-impairment'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/colourblindness/main-card.jpg"
            title='Colourblindness'
            text="Over 8% of people suffer from colourblindness, also known as colour vision deficiency. The condition has no known cure and forever poses challenges to everyday life for those with this condition."
            path='/demos/colourblindness'
            reverse='true'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/hearing-loss.jpg"
            title='Hearing Loss'
            text="Due to the prevalence of multimedia content on the Web, people who are deaf or hard of hearing face challenges when content is not designed to be accessible to them."
            path='/demos/hearing-loss'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/low-vision.jpg"
            title='Low Vision'
            text="User needs can vary greatly across individuals with low vision, or even across one person's day-to-day conditions. Web content should be designed to accomodate users with low vision, who need to be able to customize how digital content is displayed on their screens to meet their specific needs."
            path='/demos/low-vision'
            reverse='true'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/mobile-accessibility.jpg"
            title='Mobile Accessibility'
            text="Mobile devices have become increasingly prevalent nowadays, and they are used by many groups of users with different capabilities, as such designing for accessibility is crucial especially with the different set of usability issues that such devices can create."
            path='/demos/mobile-accessibility'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/motor-impairment/main-card.jpg"
            title='Motor Impairment'
            text="Motor impairment can come from many different diseases, conditions, and accidents and can affect people of all ages. Computer usage is often much more difficult with motor impairment as traditional input devices and certain website designs may not be very accomodating to users with accessibility needs."
            path='/demos/motor-impairment'
            reverse='true'
          />
        </div>
      </div>
    </>
  );
}

export default Demos