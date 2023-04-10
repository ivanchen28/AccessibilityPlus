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
        <figcaption>With smartphone devices being used by 6.92 billion people worldwide, they have become integral to everyday life for many people - as a way of accessing information instantaneously - whether that be through the Internet or on mobile applications.</figcaption>
      </figure>
      <p>
      There may be a mistaken belief that individuals with disabilities cannot use smartphones, however, whether they have cognitive, or physical disabilities, they still have access to mobile disabilities - albeit with variation in activities performed. Supporting this, a 2015 survey in the US conducted by the Rehabilitation Engineering Research Center for Wireless Technologies Shepherd Center - 91% of respondents have said they use a smartphone or tablet daily, and 72% of them use mobile applications.
      </p>
      <p>
      Mobile devices can offer low-cost and reliable solutions to people with disabilities. Some smartphone Android and iOS operating systems offer core accessibility features such as screen readers which can convert onscreen text to braille or audio, built-in tools to change color contrast settings that can support those with color-deficient vision, temporary screen magnifiers that permit those with low vision to view small text or images, live transcripts or captioning, sound amplifiers, and voice controls which allow users to control their devices with spoken commands.
      </p>
      <figure>
        <img
          src="/images/demos/mobile-accessibility/android-access-features.png"
          alt="Several phone screeens with depicting the Android features Google has decoupled from the OS."
        />
        <figcaption>Google has recently decoupled Android accessibility features into a separate app 'Switch Access' which helps users control their phone or tablet with external devices or facial gestures.</figcaption>
      </figure>
      <p>
      Mobile accessibility is not only beneficial for people with disabilities, but rather every mobile device can have a better user experience when it is an emphasized part of the design process. Everyone can become impaired on some level at any point of the day, for example when users can only use their phone in one hand - limiting their dexterity, or when using a phone during a sunny day leaving them unable to read any page with poor contrast. Additionally, there are times where having accessibility features is simply convenient, such as using voice control when ones’ hands are occupied or when present in a loud or quiet environment where it is unideal to play sounds out loud, as such transcripts can be useful. There should also be the consideration that with an aging population, eventually stronger and more permanent age-related impairments are natural to ensue, so having accessibility and inclusivity in mind while designing is crucial. 
      </p>
      <figure>
        <img
          src="/images/demos/mobile-accessibility/cooking-with-voice-assistant.png"
          alt="A woman cooks while watching her tablet and using her voice assistant."
        />
        <figcaption> When cooking and needing to use both hands, a voice assistant is useful to any user with its' ability to perform any valid action that a user asks of them (like setting a timer or answering a text message).</figcaption>
      </figure>
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
      <p>
      Below an example of a poorly designed application is depicted.
      </p>
      <table>
        <tr>
            <td>
            <figure>
                <img
                src="/images/demos/mobile-accessibility/bad-ui-design.png"
                alt="A badly designed mobile music application."
                />
            </figure>
            </td>
        </tr>
      </table>
      <p>
      There are several accessibility issues with this application:
      </p>
      <ul>
        <li>Most of the application comprises of text and there is very limited pictorial representation in the form of some icons. Not only does this make the interface look and feel more crowded, this could be an issue for people with learning or cognitive disabilities, as the layout becomes more complex to parse and navigate.</li>
        <li>There is also a lack of distinct text hierarchy. For instance, the listed songs and their corresponding artists are both around the same font size and font type - if a user were to be completely color deficient, this would make it difficult to tell which was which.</li>
        <li>Display elements such as the search bar, and the buttons on the main taskbar are quite small which could make it difficult for those with motor disabilities to tap on them.</li>
        <li>There is a horizontal scroll bar used to see more songs in a playlist, which requires the user to have fine motor abilities. Additionally, the text and associated labels on the main task bar are the same size, making it difficult to tell which should be pressed.</li>
      </ul>
      <p>
      There are clear issues with the application page that would make it difficult for people with learning, motor or visual disabilities to use it, as well as make the general user experience less usable. There are several fixes that would make the application more accessible for users with disabilities, as well as improve its’ general usability.
      </p>
      <ul>
        <li>More pictorial elements, for instance a picture of a song’s album or its’ artist, can be added so that users have another way of understanding the information.</li>
        <li>The display elements, such as the buttons and the search bar, should be made larger and in the main task bar - the icons should be the main button as opposed to having the text be pressable.</li>
        <li>Text hierarchy can be added through changing the font size, making it clear what text belongs to what category.</li>
        <li>The horizontal scrollbar can be replaced by a next and previous button.</li>
      </ul>
      <p>
        These following changes were applied to design a new application page, as depicted below.
      </p>
      <table>
        <tr>
            <td>
            <figure>
                <img
                src="/images/demos/mobile-accessibility/good-ui-design.png"
                alt="A better designed mobile music application."
                />
            </figure>
            </td>
        </tr>
      </table>
      <p>
      These updates make it easier for any user to understand the information being shown on screen, with the improved structure, added pictorial elements, and larger interactive display elements. In general, the same accessibility principles from desktop applications should be applied to mobile ones; however, with the smaller screen sizes and different methods to interact (such as through gestures) - accessibility in a mobile context also needs to be considered. This includes reducing the amount of textual information on the screen, making interactive elements larger and simplifying the general layout of pages.
      </p>
    </div>
  )
}

export default MobileAccessibility