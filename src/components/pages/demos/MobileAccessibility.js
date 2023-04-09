import '../../../App.css'
import React from 'react'

function MobileAccessibility() {
  return (
    <div className='standard-page'>
      <h1 className='header'>Mobile Accessibility</h1>
      <p>
      Mobile devices have become increasingly prevalent nowadays, and they are used by many groups of users with different capabilities, as such designing for accessibility is crucial especially with the different set of usability issues that such devices can create.
      </p>
      <figure>
        <img
          src="/images/demos/mobile-accessibility/using-phone.jpg"
          alt="Person using their phone"
        />
      </figure>
      <p>
      With smartphone devices being used by 6.92 billion people worldwide, they have become integral to everyday life for many people - as a way of accessing information instantaneously - whether that be through the Internet or on mobile applications. There may be a mistaken belief that individuals with disabilities cannot use smartphones, however, whether they have cognitive, or physical disabilities, they still have access to mobile disabilities - albeit with variation in activities performed. Supporting this, a 2015 survey in the US conducted by the Rehabilitation Engineering Research Center for Wireless Technologies Shepherd Center - 91% of respondents have said they use a smartphone or tablet daily, and 72% of them use mobile applications.
      </p>
      <p>
      Mobile devices can offer low-cost and reliable solutions to people with disabilities. Some smartphone Android and iOS operating systems offer core accessibility features such as screen readers which can convert onscreen text to braille or audio, built-in tools to change color contrast settings that can support those with color-deficient vision, temporary screen magnifiers that permit those with low vision to view small text or images, live transcripts or captioning, sound amplifiers, and voice controls which allow users to control their devices with spoken commands.
      </p>
      <p>
      Mobile accessibility is not only beneficial for people with disabilities, but rather every mobile device can have a better user experience when it is an emphasized part of the design process. Everyone can become impaired on some level at any point of the day, for example when users can only use their phone in one hand - limiting their dexterity, or when using a phone during a sunny day leaving them unable to read any page with poor contrast. Additionally, there are times where having accessibility features is simply convenient, such as using voice control when ones’ hands are occupied or when present in a loud or quiet environment where it is unideal to play sounds out loud, as such transcripts can be useful. There should also be the consideration that with an aging population, eventually stronger and more permanent age-related impairments are natural to ensue, so having accessibility and inclusivity in mind while designing is crucial. 
      </p>
      <p>
      It should be noted, mobile devices themselves offer unique design challenges when it comes to accessibility, these include: a smaller screen size, different display resolutions and touchscreen specific interaction methods - such as pinching, swiping and tapping the screen. These fundamental differences can cause usage difficulties if mobile applications and sites are not designed with accessibility in mind. Additionally, though mobile devices do offer core accessibility features, they come with the caveat that, in order to work properly, the app or site interface they are being used on must be programmed to meet certain accessibility requirements.
      </p>
      <ul>
          <li>Understanding complex screen layouts or menus (this is especially exacerbated on the mobile devices’ more compressed display).</li>
          <li>Relying solely on textual labels during navigation with no pictorial representation (this is particularly pertinent in mobile versions of applications where screen real estate is limited, so only text is used).</li>
          <li>Tasks requiring fine manual dexterity such as interacting with smaller display elements (ie. buttons, checkboxes, keypads).</li>
          <li>Problems with executive function, like ‘sequencing’ - where a user needs to remember a sequence of actions to obtain a desired outcome (this is prevalent in some mobile contexts which require many remembered actions - ie. to access wifi: users need to pull down a taskbar, find a certain icon, navigate to a list, select one specific network…).</li>
          <li>Horizontal navigation - while expected for desktops given the landscape oriented-screen, makes navigation extremely tedious and difficult on a mobile screen which is designed to scroll vertically.</li>
      </ul>
      <p>
      This is not to say that accessibility challenges for desktop versions of applications or websites do not overlap with those on mobile devices. There still needs to be consideration to comply to guidelines that do not necessarily apply to a mobile context - ie. adding alternative text for images, a high contrast color scheme, dynamic text resizing…
      </p>

    </div>
  )
}

export default MobileAccessibility