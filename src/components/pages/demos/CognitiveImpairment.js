import '../../../App.css'
import React from 'react'

function CognitiveImpairment() {
  return (
    <>
      <div className='standard-page'>
        <h1 className='title'>Cognitive Impairment</h1>
        <p>
          Cognitive impairment is a disability that affects how people process and consume information. People affected by this disability typically experience difficulty remembering, learning, concentrating, and making decisions. Cognitive impairment can stem from a multitude of neurological disorders and conditions, and ranges from mild to severe impairment. Mild impairment is considered to loosely affect the memory, such as short-term memory loss and inability to focus. However, more severe cases of impairment can be more mentally debilitating and cause complete loss of meaning or understanding to certain concepts.
        </p>
        <figure>
          <img
            src="/images/demos/cognitive-impairment/eraser-brain.jpg"
            alt="An eraser erasing a drawing of a brain on a piece of paper."
          />
          <figcaption>About 2.7% of people experience some sort of cognitive impairment.</figcaption>
        </figure>
        <p>
          There are many different conditions which may lead to cognitive impairment. Autism, concussions, severe anxiety, dyslexia, Alzheimer's and dementia are some of the most common reasons for why someone may be cognitively impaired. There are over 16 million people in the U.S. who have some level of cognitive impairment, with seniors being the age group at the highest risk for conditions such as dementia and Alzheimer's. But youth alike can have disabilities such as autism or even concussions through freak accidents.
        </p>
        <p>
          Individuals with cognitive impairment all face different challenges unique to them, as the umbrella term includes all users with some neurological difficulties and/or memory loss issues. These issues extend to using the computer and browsing the Internet, as the digital world is very important and can also be a powerful tool for accessibility needs.
        </p>
        <figure>
          <img
            src="/images/demos/cognitive-impairment/bad-design.jpg"
            alt="Examples of poor cognitive impairment design."
          />
          <figcaption>Examples of poor design for cognitive impairment.</figcaption>
        </figure>
        <p>
          Information presented on webpages and applications needs to be concise and easily comprehensible, with good spacing and no distractions. This helps cognitively impaired users which have difficulty with comprehension understand the information as much as possible, and distractions or bad spacing can make that more difficult. Additionally, short-term memory should not be a requirement when filling out forms or fields. The following list highlights examples where these issues may arise:
        </p>
        <ul>
          <li>Forms which have the instructions within the field that disappear once the user beings typing can cause memory issues. While it may not be as much of an issue for short response fields such as Name, Email, etc., it can be very problematic for long response questions if examples or the instructions themselves disappear as soon as the user starts typing.</li>
          <li>Bad spacing between words and between paragraphs in long texts can cause users with memory loss issues to lose sight of the topic at hand, and does not help comprehension as the text is harder to read.</li>
          <li>Distracting images, graphics, and advertisements can cause users to be overwhelmed and lose focus.</li>
          <li>Feedback for forms should be easily identifiable and make sense.</li>
          <li>Alternative texts, captions, and transcripts can help with comprehension if images are too complex or videos are too fast.</li>
          <li>Cognitively impaired users may be more prone to scams, false advertising, phishing attempts and lures.</li>
          <li>Actions should not be timed unless absolutely necessary to avoid stress.</li>
        </ul>
        <figure>
          <img
            src="/images/demos/cognitive-impairment/accessibility-design.png"
            alt="Dos and Don'ts when designing for users with dyslexia and anxiety."
          />
          <figcaption>Good design guidelines for cognitive impairment web accessibility, specifically anxiety and dyslexia, but they are good guidelines for other types of cognitive impairment conditions as well.</figcaption>
        </figure>
        <p>
          There are a few methods for developers of websites and applications to provide accessibility for cognitive impairment. The above chart is very helpful for some more common types of impairments, and also applies to more serious cases of cognitive impairment. The biggest concepts to remember for developers is to minimize the amount of memory required on users' behalf, and ensure content is as clear as possible. Some examples of this philosphy include:
        </p>
        <ul>
          <li>Adding instructions outside of fields in forms, and adding examples inside the field to be removed when they start typing.</li>
          <li>Minimize distractions on the page such as popups, bright advertisements, and extremely high contrast.</li>
          <li>Make the text legible: sans-serif fonts are more legible and easier to understand, but ensure there is sufficient spacing between characters and words.</li>
          <li>Ensure videos and images have alternate texts and transcripts when possible.</li>
          <li>Do not use timed components, allow the user to browse the content at their pace when possible.</li>
          <li>Ensure that extensions and external applications are able to support the user, e.g. autofill for forms, webpage formatters for reading, auto-generated captions, etc.</li>
        </ul>
      </div>
    </>
  )
}

export default CognitiveImpairment