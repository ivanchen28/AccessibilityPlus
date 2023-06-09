import './CardHolder.css'
import React from 'react';
import CardItem from './CardItem';

function CardHolder() {
  return (
    <div className='cards-holder'>
        <h1>Check out our demos!</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-list'>
                    <CardItem
                        src="/images/demos/cognitive-impairment/main-card.jpg"
                        text="Over 10% of adults will experience cognitive impairment by the age of 65."
                        label='Cognitive Impairment'
                        path='/demos/cognitive-impairment'
                    />
                    <CardItem
                        src="/images/demos/colourblindness/main-card.jpg"
                        text="300 million people suffer from colour vision deficiency globally, also known as colourblindness."
                        label='Colourblindness'
                        path='/demos/colourblindness'
                    />
                </ul>
                <ul className='cards-list'>
                    <CardItem
                        src="/images/demos/hearing-loss.jpg"
                        text="Nearly 20% of people experience hearing loss and deafness of varying degrees."
                        label='Hearing Loss'
                        path='/demos/hearing-loss'
                    />
                    <CardItem
                        src="/images/demos/low-vision.jpg"
                        text="Users with uncorrectable vision loss may require dynamic sizing of webpages and other accessibility features."
                        label='Low Vision'
                        path='/demos/low-vision'
                    />
                </ul>
                <ul className='cards-list'>
                    <CardItem
                        src="/images/demos/mobile-accessibility.jpg"
                        text="Mobile devices are becoming popular support tools for users with accessibility needs."
                        label='Mobile Support'
                        path='/demos/mobile-support'
                    />
                    <CardItem
                        src="/images/demos/motor-impairment/main-card.jpg"
                        text="Motor impairment in the hands and arms severely impedes web and computer usage."
                        label='Motor Impairment'
                        path='/demos/motor-impairment'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default CardHolder