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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi. Fusce a ligula eleifend, pharetra dui eget, pharetra nibh. Ut elit lacus, lobortis quis metus sit amet, tempus egestas magna. Sed felis purus, consequat et efficitur sed, iaculis in neque. Morbi mollis diam enim, a pellentesque erat rhoncus ut. Sed pretium eros massa, at lobortis diam mollis et.
        </p>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/cognitive-impairment.jpg"
            title='Cognitive Impairment'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi."
            path='/demos/cognitive-impairment'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/colourblindness/main-card.jpg"
            title='Colourblindness'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi."
            path='/demos/colourblindness'
            reverse='true'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/contrast.jpg"
            title='Contrast'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi."
            path='/demos/contrast'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/hearing-loss.jpg"
            title='Hearing Loss'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi."
            path='/demos/hearing-loss'
            reverse='true'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/low-vision.jpg"
            title='Low Vision'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi."
            path='/demos/low-vision'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/mobile-accessibility.jpg"
            title='Mobile Accessibility'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere eget augue et consectetur. Maecenas fermentum maximus ornare. Integer vulputate, nisi ac faucibus sodales, lectus risus vulputate metus, a luctus tellus sapien vitae nisi."
            path='/demos/mobile-accessibility'
            reverse='true'
          />
        </div>

        <div className='strip-holder'>
          <StripItem
            src="/images/demos/motor-impairment/main-card.jpg"
            title='Motor Impairment'
            text="Motor impairment can come from many different diseases, conditions, and accidents and can affect people of all ages. Computer usage is often much more difficult with motor impairment as traditional input devices and certain website designs may not be very accomodating to users with accessibility needs."
            path='/demos/motor-impairment'
          />
        </div>
      </div>
    </>
  );
}

export default Demos