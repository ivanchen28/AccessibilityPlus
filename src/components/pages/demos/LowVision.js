import '../../../App.css'
import React from 'react'
import LowVisionDemo from '../../LowVisionDemo'

function LowVision() {
  return (
    <>
      <div className='standard-page'>
        <h1 className='title'>Low Vision</h1>
        <p>
            “Low vision” is defined by the W3C as any visual impairment other than blindness that interferes with daily living and cannot be corrected with eyewear, medication, or surgery. According to the World Health Organization, an estimated 285 million people worldwide, or approximately 3.6% of the global population, have low vision, making it the most common form of visual impairment.
        </p>
        <p>
            Although more common among the elderly, low vision can occur at any age due to a wide range of conditions such as eye diseases or injuries, cataracts, or glaucoma. Each of these conditions can impact an individual’s visual experience in a wide range of ways. Some of the more common ones often impact visual clarity and/or field of vision, as shown below.
        </p>
        <figure>
          <img
            src="/images/demos/low-vision/low-vision-examples.jpg"
            alt="Figure showing (a) image of a dog, (b) the same image with center area obscured, (c) the same image with outer area obscured, and (d) the same image heavily blurred."
          />
          <figcaption>The visual experience of an individual with (a) normal vision, (b) macular degeneration, (c) glaucoma, and (d) cataracts.</figcaption>
        </figure>
        <p>
            Unlike blind users, users with low vision prefer to make use of their residual vision as much as possible and are able to see content when it is displayed optimally for them. However, user needs can vary greatly across individuals with low vision—or even across one person’s day-to-day conditions—and one user’s needs may conflict with another’s. For example, <a href="https://doi.org/10.1016/j.promfg.2015.07.586">studies</a> have shown that individuals with tunnel vision benefit from smaller text sizes, whereas most individuals with low visual clarity need larger text sizes to read better.
        </p>
        <p>
            Since visual experiences within the low vision community can vary so drastically, users need to be able to customize how content is displayed on their screens to meet their own needs. Common assistive tools and adaptive strategies for making web content more accessible include screen magnifiers (software that can be used to magnify portions of the screen), custom browser settings (for zooming in on a page or increasing the default text size), sometimes and screen readers, or any combination of the three. 
        </p>
        <hr/>
        <LowVisionDemo></LowVisionDemo>
        <hr/>
        <p>
          As seen in the interactive example above, accessibility fails when the content fails to allow its users to interact with it in their preferred way, such as adjusting settings for font size and page zoom. Thus, flexible content—for example, <u>content that is flexible enough to be rendered by screen readers, enlarged by screen magnifiers, and responsive to browser setting changes</u>—is a key principle that developers should pay attention to when making the Web accessible to low vision users.
        </p>
        <p>
          Unfortunately, despite the wide variety of assistive and adaptive methods that low vision users use to customize web content, current standards on accessibility for visually impaired users tend to be geared towards compliance for screen readers, which means users who rely on screen magnification, text resizing, or other vision support tools can often be overlooked in discussions on design. Some practical recommendations on how to improve accessibility for people who use such tools based on both personal experience and <a href="https://dev.to/_bigblind/how-to-make-your-website-accessible-to-people-who-use-a-screen-magnifier">online stories</a> of low vision users are listed below:
        </p>
        <ul>
          <li><u>Allow users to adjust text size without loss of any content.</u>
          <p></p>
          In the example below, the content on the login page is cut off for a user with large text size settings. The page does not accomodate scrolling, either.
          <figure>
            <img
              src="/images/demos/low-vision/textsize-bad-ex.gif"
              alt="An animation of a login form. The password field is cut off due to the increased text size of the other components."
              style={{ padding: '20px' }}
              height="350px"
            />
          </figure>
          </li>
          <li><u>Do not rely solely on the position of the cursor for displaying content.</u>
          <p></p>
          In the first example below, a user using a screen magnifier might encounter a tooltip triggered by a cursor hover. The pop-up is larger than the screen magnifier’s view, but when the user moves their cursor to read it, the tooltip loses focus and disappears.
          <figure>
            <img
              src="/images/demos/low-vision/tooltip-bad-ex.gif"
              alt="An animation of an information icon next to a checkbox. When the cursor is moved over the icon, a speech bubble containing some explanatory text appears next to the icon. When the cursor is moved away from the icon, the speech bubble disappears."
              style={{ padding: '10px 20px' }}
            />
          </figure>
          <p></p>
          The second example below shows how a similar tooltip might be done better. Here, the user can move their cursor onto the tooltip in order to read it, and it stays visible.
          <figure>
            <img
              src="/images/demos/low-vision/tooltip-good-ex.gif"
              alt="An animation of a tooltip that remains visible when the cursor is moved from the information icon to the speech bubble, only disappearing when the cursor leaves the bubble."
              style={{ padding: '20px' }}
            />
          </figure>
          </li>
          <li><u>Place feedback and related information in close proximity to the user's visual focus.</u>
          <p></p>
          In the example below, the user edits their profile details on the left of the screen, but the confirmation message appears in the top right. This message would not be instantly noticeable to a user using a screen magnifier or zoomed in on the page. Even then, they would have to scroll a fair bit to even read the message.
          <figure>
            <img
              src="/images/demos/low-vision/action-bad-ex.gif"
              alt="An animation of an information field. When the save button is clicked, a confirmation message appears in the top right."
              style={{ padding: '20px' }}
              width="450px"
            />
          </figure>
          </li>
        </ul>
        <p>
          The above are just a few suggestions that can make the Web easier to navigate for people with low vision. The key takeaway here is that web content should be designed to accomodate the varied and individual needs of users with low vision, and allow them to have control over how digital content is displayed on their screens without needing to sacrifice value, quality, or efficiency. 
        </p>
      </div>
    </>
  )
}

export default LowVision