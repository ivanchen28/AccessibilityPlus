import '../../../App.css'
import React from 'react'
import BadCheckboxArray from '../../BadCheckboxArray'
import CheckboxArray from '../../CheckboxArray'

function MotorImpairment() {
  const checkboxOptions = [
    {id: "1", option: "I am not currently experiencing... Fever and/or chills"},
    {id: "2", option: "I am not currently experiencing... Cough", explanation: "Not related to other known causes and conditions (for example, chronic obstructive pulmonary disease or seasonal allergies)."},
    {id: "3", option: "I am not currently experiencing... Shortness of breath", explanation: "Not related to other known causes and conditions (for example, asthma or preexisting heart conditions)."},
    {id: "4", option: "I am not currently experiencing... Decreased sense of taste and smell", explanation: "Not related to other known causes or conditions (for example, allergies or nasal polyps)."},
    {id: "5", option: "I am not currently experiencing... Muscle aches and joint pain", explanation: "Not related to other known causes and conditions (for example, receiving a vaccine within the last 48 hours or arthritis)."},
    {id: "6", option: "I am not currently experiencing... Extreme, unusual tiredness", explanation: "General feeling of being unwell, lack of energy and not related to other known causes or conditions (for example, receiving a COVID-19 vaccine and/or flu shot in the last 48 hours, depression, insomnia, thyroid dysfunction, anemia, or malignancy)."},
    {id: "7", option: "I am not currently experiencing... Sore throat or difficulty and/or pain swallowing", explanation: "Not related to other known causes or conditions (for example, seasonal allergies, post-nasal drip, or acid reflux)."},
    {id: "8", option: "I am not currently experiencing... Runny, stuffy, or congested nose", explanation: "Not related to other known causes or conditions (for example, seasonal allergies, cold weather, or chronic sinusitis)."},
    {id: "9", option: "I am not currently experiencing... Headache", explanation: "Not related to other known causes or conditions (for example, migranes, or concussion)."},
    {id: "10", option: "I am not currently experiencing... Nausea, vomiting and/or diarrhea", explanation: "Not related to other known causes or conditions (for example, transient vomiting due to anxiety in children, chronic vestibular dysfunction, irritable bowel syndrome, inflammatory bowel disease, or side effects of medication)."},
    {id: "11", option: "I am not currently experiencing... Abdominal pain", explanation: "Not related to other known causes or conditions (for example, menstrual cramps or gastroesophageal reflux disease)."},
    {id: "12", option: "I am not currently experiencing... Pink eye", explanation: "Not related to other known causes or conditions (for example, recurrent styes, allergies, or blepharitis)."},
    {id: "13", option: "I am not currently experiencing... Decreased or no appetite (young children only)", explanation: "Not related to other known causes or conditions (for example, recurrent styes, allergies, or blepharitis)."},
    {id: "14", option: "I am not currently... Feeling confused or unsure of where you are"},
    {id: "15", option: "I am not currently... Losing conciousness"},
    {id: "16", option: "I am not living in a highest risk congregate care setting", explanation: "For example, long-term care home, retirement home, employer-provided living setting."},
    {id: "17", option: "I am not immunocompromised", explanation: "Factors such as old age, diabetes and end-stage renal disease are generally not considered immunocompromised."},
    {id: "18", option: "I have not been told that I should be quarantining, isolating, or staying at home", explanation: "Could include being told by a doctor, health care provider, public health unit, federal border agent or other government authority."},
  ];

  return (
    <>
      <div className='standard-page'>
        <h1 className='title'>Motor Impairment</h1>
        <p>
          Individuals with a motor or physical impairment face limitation and/or restriction of muscular control and coordination that may hamper their ability to do everyday tasks. Disabled users with motor impairments may also experience pain, lack of sensation, and frequent involuntary movements such as tremoring.
        </p>
        <figure>
          <img
            src="/images/demos/motor-impairment/main-card.jpg"
            alt="Elderly person with impaired movement in the hand."
          />
          <figcaption>Motor impairment in the hands can make computer usage very difficult.</figcaption>
        </figure>
        <p>
          There are many conditions that can cause motor impairment of varying degrees such as carpal tunnel, Amyotrophic lateral sclerosis (ALS), neuropathy, cerebral palsy, and most notably Parkinson's disease, where users have frequent tremoring in certain muscles. More severe cases of motor impairment may include loss of limbs and paralysis from extreme accidents, frequently with spinal cord injuries. However, motor impairment can also develop over time simply from repeated stress and strain on muscles which can cause pain when using them for extended periods of time.
        </p>
        <p>
          While Parkinson's disease is much more common among people above the age of 60 and stigma around impaired motor skills is typically associated with the elderly, there are many youth and adults who are also affected by motor impairment from accidents, conditions, and disorders, some from birth such as those suffering from cerebral palsy.
        </p>
        <figure>
          <img
            src="/images/demos/motor-impairment/parkinsons.jpg"
            alt="An individual with Parkinson's disease that has hand tremors."
          />
          <figcaption>Hand tremors are a very common symptom of Parkinson's disease.</figcaption>
        </figure>
        <p>
          Users with these impairments face many challenges on a daily basis when using computers to access the Internet, particularly with how peripherals for user input are designed. The computer mouse is perhaps the greatest limitation for individuals experiencing motor impairment, considering the precision of movement required to adjust the cursor's location on screen. Users suffering from hand tremors and lack of coordination in the hands suffer greatly when attempting to use traditional mice to move the pointer or use the scroll wheel precisely. Furthermore, mouse buttons can also prove problematic if users frequently accidentally apply pressure or is unable to apply pressure to actuate them.
        </p>
        <p>
          Limited muscular control or lack of sensation also impedes keyboard usage as users would have difficulty pressing individual keys to accomplish certain tasks. As words are typed character by character, typing out longer sentences or search queries can be challenging for users. 
        </p>
        <p>
          These limitations with input devices can severely hamper the users's ability to browse websites and use applications. Here are some frequent issues experienced by users with motor impairment:
        </p>
        <ul>
          <li>Interactive components of the webpage and browser application such as navigation buttons, media controls, and long forms are too small for users and thus are difficult to aim at and click.</li>
          <li>Interactive components are not accessible through means other than the cursor/pointer, namely by using TAB to parse through elements one by one. The TAB order normally allows users to navigate the site's contents without their mouse, but this order is sometimes not logical and hampers applications used to help with navigation.</li>
          <li>Forms and other activities require too many unnecessary actions for users which may have difficulty performing these actions, such as selecting checkboxes and entering text into fields.</li>
          <li>Form submissions are not very tolerant of errors such as data entry errors and are not very accepting of certain mistakes that can be fixed automatically (excluding important fields and froms).</li>
          <li>Applications may not support a variety of keyboard shortcuts for common actions and menus.</li>
          <li>Websites and applications are not compatible with common assistive applications that help users reduce physical movement when browsing sites.</li>
          <li>Websites and applications are not compatible with smaller displays and screens. Mobile devices are frequently used as accessibility tools to assist with computer usage.</li>
        </ul>
        <p>
          Below, we provide a demonstration on how some of these issues can be problematic for users. Suppose Stephen has Parkinson's disease, a condition that causes shaking in certain parts of the body. Stephen's tremors are in his right hand, making it difficult for him to properly use his mouse. Stephen has recently had family members who tested positive for COVID-19 and would like to conduct a COVID-19 self-assessment.
        </p>
        <p>
          However, the assessment is very poorly designed and requires Stephen to check off all symptoms that he does not have, with no option to select all. Furthermore, the checkboxes are all very small and Stephen has a difficult time clicking mouse buttons. The form would be very difficult for Stephen to complete:
        </p>
        <hr/>
        <p className='demo-paragraph'>
          Please acknowledge that you are <u>not</u> currently experiencing the following symptoms or situations which may be potential indicators and transmittors of COVID-19 by selecting the checkbox next to the symptom.
        </p>
        <BadCheckboxArray options={checkboxOptions} />
        <hr/>
        <p>
          As you can see, completing such a form would be very difficult for someone with motor impairment, and could also be obnoxious to complete without the impairment. To somewhat simulate Stephen's difficulty with actuating mouse buttons, the form did not register clicks half the time. This, combined with the small boxes, made it very difficult to complete. Futhermore, the options could not be indexed with keyboard controls (TAB and Enter/Space).
        </p>
        <p>
          There are a few changes that could be made to make the form more accessible for users with motor impairment and overall easier to complete:
        </p>
        <ul>
          <li>The checkboxes should be made bigger. Larger interactive components will assist users with motor impairment in using these elements.</li>
          <li>A select all feature has been added. Fewer actions to accomplish the same task makes it easier to complete forms and use applications.</li>
          <li>The elements are now accessible with keyboard indexing (TAB and Enter/Space). Allowing users to use alternate methods of navigation will make pages more accessible and accomodate users with various accessibility programs and tools to assist with impairment.</li>
        </ul>
        <hr/>
        <CheckboxArray options={checkboxOptions} />
        <hr/>
        <p>
          These changes have all made the form much easier to complete. Developers should always strive to make their products and webpages as accomodating and accessible as possible for users with motor impairments. To recap, larger components, quality-of-life features, shortcuts, and multiple methods of navigation and input will helps users in this situation and many others. Furthermore, their website should be accomodating to assistive programs that may adjust the view of their page, such as zooming in, enlarging certain components, and highlighting interactable elements.
        </p>
        <figure>
          <img
            src="/images/demos/motor-impairment/ergonomic-keyboard.jpg"
            alt="A person uses an ergonomic keyboard and mouse."
          />
          <figcaption>Ergonomic keyboards can be helpful in reducing pain for users with minor motor impairment.</figcaption>
        </figure>
        <p>
          There are also methods for users to alleviate pain from motor impairments or improve their accessibility when browsing websites and using applications:
        </p>
        <ul>
          <li>For less severe cases where the onset of motor impairment appears only after extended use sessions, ergonomic keyboards and mice can be very beneficial in alleviating pain.</li>
          <li>Mobile devices are very physically compact tools that can provide a host of applications and features to help impaired users. For more information, please see our mobile accessibility demo.</li>
          <li>Alternate forms of input such as speech-to-text, keyboard commands, assistive touch on touchscreens, and even trackers for head movements can be very beneficial in combatting motor impairments.</li>
          <li>There are many software programs designed for impaired users that assist with motor impairment, such as enlarging certain features, receiving voice commands, connecting alternate inputs such as tablets, and more.</li>
        </ul>
      </div>
    </>
  )
}

export default MotorImpairment