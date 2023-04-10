import '../../App.css'
import React from 'react'

function Accounts() {
  return (
    <div className='standard-page'>
      <h1 className='header'>User Accounts</h1>
      <h2 className='subtitle'>Stories from users with disabilities about their experiences online.</h2>
      <p>
      With uses of the Internet extending to many areas such as education, career, health and finances, as well as being used in everyday life, it has become increasingly important to stay connected. Even in 2010, the importance of the internet was emphasized by the general population - as a BBC survey of 26 countries taken March of that year found 79% of people believed that access to the Internet is a fundamental human right. The UN followed suit, declaring in 2011, that disconnecting individuals from the Internet is a violation of human rights.
      </p>
      <p>
      Despite this emphatically expressed view that the Internet should be a right, there still remain a portion of the population that are unable to access even the most basic internet services. In Canada specifically, the Canadian Survey on Disability (CSD) found in 2017 that about one in five Canadians with a disability said they do not use the internet. This section focuses on several perspectives of Canadians with disabilities who have failed to be accounted for when it comes to being connected online.
      </p>
      <br />
      <br />
      <h3>Kim Kilpatrick</h3>
      <figure>
        <img
          src="/images/kim-kilpatrick.png"
          alt="Kim Kilpatrick with guide dog Tulia."
        />
        <figcaption> Kim Kilpatrick with guide dog Tulia. Photo by Canadian Council of the Blind </figcaption>
      </figure>
      <p>
      Kim Kilpatrick has been blind since birth, and relies on different assistive software, such as electronic braille, voice assistance and screen readers in order to navigate the Internet. Screen readers help her read what is on her screen, and she said the technology works well when all the tabs and buttons on the webpage are labeled correctly. Though, Kilpatrick additionally emphasizes the importance of electronic braille, a Bluetooth device that pairs with a computer and translates on screen text to braille, to those who are both deaf and blind, as they would not be able to hear a screen reader. If sites are not properly formatted to fit accessibility guidelines, such devices may fail to properly parse content for users.
      </p>
      <p>
      Kilpatrick also makes the point that while some devices come preinstalled with assistive technologies, like voice assistance on phones, sometimes users may have to buy other high-end devices to get accessibility they need which may not always be financially viable for someone with a disability. 
      </p>
      <br />
      <br />
      <h3>Jim Ryan</h3>
      <figure>
        <img
          src="/images/jim-ryan.png"
          alt="Jim Ryan at his home in Chilliwack, B.C."
        />
        <figcaption> Jim Ryan at his home in Chilliwack, B.C. Photo by Darryl Dyck for National Post </figcaption>
      </figure>
      <p>
      In 2016, after suffering a spinal cord injury, Jim Ryan became a quadraplegic, and has had to learn to use many different assistive technologies to use his electronic devices. “I don’t feel or move anything below my armpits,” he says. “So, I do everything with my mouth.” Ryan says some of his most common issues with technology is when his voice software devices fail to hear him correctly or he cannot use them for a certain task, like completing an online form or he has to input an online password, so he has to use his onscreen keyboard. “It’s a lot slower for me and frustrating,” he says. “It’s like single-finger typing”
      </p>
      <p>
      As such, when encountering an inaccessible website, Ryan leaves and takes his business to another webpage. “I just don’t want to fight with it, my life is a fight enough as it is,” he states.
      </p>
    </div>
  )
}

export default Accounts