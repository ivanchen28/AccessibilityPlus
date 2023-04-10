import '../../../App.css'
import React from 'react'
import ColourblindnessDemo from '../../ColourblindnessDemo'

function Colourblindness() {
  return (
    <>
      <div className='standard-page'>
        <h1 className='title'>Colourblindness</h1>
        <p>
          Individuals with colourblindness or colour vision deficiency (CVD) have a reduced ability to perceive certain colours in their vision. People affected by CVD have trouble seeing the brightness and/or shade of certain colours or completely cannot see the colour at all. Colours are also harder to differentiate between one another. More serious cases of colourblindness can result in other symptoms such as sensitivity to light, involuntary eye movement and eye strain.
        </p>
        <figure>
          <img
            src="/AccessibilityPlus/images/demos/colourblindness/colourblindness-types.jpg"
            alt="Different types of colourblindness compared to normal vision."
          />
          <figcaption>Clockwise from top left: normal vision, green-blindness (deuteranopia), red-blindness (protanopia), blue-blindness (tritanopia).</figcaption>
        </figure>
        <p>
          Colourblindness is caused by issues with pigments in the eye. These pigments are found in the cells in the retina at the rear of the eye that sense different colours of light. Light is composed of three primary colours: red, green, and blue, more commonly known as RGB. Normal vision requires all three RGB pigments to function properly.
        </p>
        <p>
          However, having just one type of problematic pigment will result in that colour of light not being detectable. Missing red, green, and blue pigments will result in protanopia, deuteranopia, and tritanopia, respectively, where that colour of light will be invisible to the person. However, generally protanopia will also cause green to look brown, making it difficult to differentiate red and green. If these pigments are faulty instead of missing, the colour will appear less bright and other colours closeby on the light spectrum will be difficult to distinguish. This is known as protanomaly, deuteranomaly, and tritanomaly for red, green, and blue respectively.
        </p>
        <p>
          Having no pigments at all in the retina is known as achromatopsia, which results in the person essentially viewing the world in grayscale. However, this condition is very rare and the majority of colourblind people only have difficulty differentiating one or two colours.
        </p>
        <figure>
          <img
            src="/AccessibilityPlus/images/demos/colourblindness/colourblindness-percentage.jpg"
            alt="A chart showing the relative frequency of colourblindness in men and women."
          />
          <figcaption>Colourblindness is much more common in men (1 in 12) than women (1 in 200).</figcaption>
        </figure>
        <p>
          8% of people experience some sort of colourblindness, however, the condition is much more common in men than women. This is because the genetic conditions are passed down through the X chromosome, of which men have one compared to the two in women, making them much more likely to receive the condition.
        </p>
        <p>
          The majority of colourblind people suffer from protanopia or protanomaly, having deficient or missing cells responsible for sensing red light and some green colours as well. This can be very problematic as red is very commonly used to represent danger, warning, and caution and green frequently represents affirmation. For example, traffic signals can be very problematic from people suffering from protanopia, or two jersey colours in a sporting match.
        </p>
        <figure>
          <img
            src="/AccessibilityPlus/images/demos/colourblindness/red-green-colourblindness.jpg"
            alt="Two soccer players on opposing teams are wearing jerseys of differing colours, red and green, but become the same colour of brown for people with protanopia."
          />
          <figcaption>A soccer match between Wales and Ireland in 2022 resulted in the teams wearing red and green, respectively. However, people suffering from protanopia could not differentiate the two teams.</figcaption>
        </figure>
        <br/>
        <hr/>
        <h2>Colourblindness and Technology</h2>
        <p>
          Colours besides shades of black, grey and white are used very frequently in applications and websites today, obviously with good reason. However, developers should be mindful that 8 percent of the population has some form of colourblindness condition, and their projects and products should be accessible for these users.
        </p>
        <p>
          With colourblindness, developers should remember one crucial guideline: colour should not be the only method of conveying certain information. If only colour is used, it can very difficult for colourblind readers to understand warnings, options, or other identifying information that the colour may represent.
        </p>
        <p>
          The following are a few common challenges that colourblind users face when using computers on a daily basis:
        </p>
        <ul>
          <li>Certain fields in a form will frequently be coloured in red if values are missing to indicate they are a required field.</li>
          <li>Colourblind users may sometimes struggle with captchas as any objects they may need to identify and their surroundings may have their colour diminished or not visible. Sometimes, colour is directly used as part of the challenge.</li>
          <li>Online shopping frequently has colour as an option for products, particularly for clothing.Colourblind users may not know which option they have selected if colour swatches are not labeled.</li>
          <li>Websites and interfaces may not be supportive of external applications that adjust colour for colourblind users to help them better identify them.</li>
          <li>Images and videos may be missing alternative texts and transcripts to account for any information that is not understood due to colourblindness</li>
          <li>Content with colours that may appear in high contrast to users with normal vision may be very difficult to distinguish for colourblind users (e.g. green text on red backgrounds).</li>
        </ul>
        <hr/>
        <p>
          Below, we provide a demonstration on how some of these issues can be problematic when colourblind individuals visit webpages or use applications. Suppose Michael is red-green colourblind, having protanopia. This means his retinas are missing cells to sense red light, and green light is very difficult to distinguish as well. 
        </p>
        <p>
          Michael wishes to purchase some shirts online, but has a lot of difficulty picking colours as some of them look identical to him and the page does not have any other colour indicator. He would like to purchase a <u>black</u> shirt for himself and his significant other has requested an identical shirt in <u>green</u>. Can he pick them out?
        </p>
        <hr/>
        <ColourblindnessDemo label="false"></ColourblindnessDemo>
        <hr/>
        <p>
          We can see that Michael will struggle to identify the green shirt from the red shirt without any identifiers for which colour he is picking besides the image and colour swatch itself. He may also accidentally end up buying maroon instead of black as they both look black to him.
        </p>
        <p>
          To fix this, we can add a label showing the colour for the user. While this makes the design less minimalistic, it is a crucial addition that will enable some users such as Michael to better use the site and purchase items.
        </p>
        <hr/>
        <ColourblindnessDemo label="true"></ColourblindnessDemo>
        <hr/>
        <p>
          When using colour on a webpage or application, developers should consider whether or not the colour is crucial to conveying information for the user. Examples of this would be the above demo, red to indicate missing fields and alerts, and colours to highlight important elements and make the page prettier. If this information is crucial, developers should ensure that colourblind users can see them even with their condition, and contrast backgrounds with text with colourblindness in mind. The following are a few recommendations for programmers and UI designers:
        </p>
        <ul>
          <li>Add colour swatches for online shopping where colour is a selectable option for a product (like above).</li>
          <li>Important fields should have a visual indicator besides simply colouring the box red. Typically, pages mark these fields with an asterisk.</li>
          <li>If red and green are used for affirmation, there should be another visual indicator such as checkmarks, crosses, and the like to support them. For example, on a task managing system such as Jira, colouring titles of incomplete tasks red and complete tasks green would be confusing for colourblind users.</li>
          <li>Do not use red and green excessively, e.g. as the background and text of a page unless absolutely necessary.</li>
          <li>If the user is required to idenfity certain colours as part of a captcha or game, ensure there are other indicators such as numbers to support the colours.</li>
          <li>Links should be underlined or highlighted instead of just coloured differently, in case people are unable to see difference in colour.</li>
          <li>Captions and alternate texts can be useful if colour is very important to the content.</li>
          <li>Having good contrast on pages will help colourblind users, particularly the very few who cannot see colour at all and rely entirely on contrast to see the world.</li>
          <li><a href="https://www.color-blindness.com/coblis-color-blindness-simulator/">Coblis</a> has a colourblindness simulator that has the ability to turn images into what colourblind people will see, depending on the condition they have. It can be very useful to run webpages, images, and screenshots of applications through this tool to see if any sections need their colours tweaked to better stand out.</li>
        </ul>
        <figure>
          <img
            src="/AccessibilityPlus/images/demos/colourblindness/colourblind-glasses.jpg"
            alt="A mountain range seen through a pair of colourblind glasses, enhancing the colour."
          />
          <figcaption>Colourblind glasses can help users enhance certain colours they may not be able to see well, partially restoring their vision for that colour range.</figcaption>
        </figure>
        <p>
          Currently, there are unfortunately no known cures for colourblindness as it is a genetic condition. However, there are methods that individuals with the condition can use to combat their disability, the most well-known of which is colourblind glasses. These glasses adjust colour going through them to brighten colours the user cannot see very well, which in turn will make them appear slightly more distinct to the wearer. Sadly the effectiveness may vary wildly depending on the severity of colour deficiency, so your mileage may vary.
        </p>
      </div>
    </>
  )
}

export default Colourblindness