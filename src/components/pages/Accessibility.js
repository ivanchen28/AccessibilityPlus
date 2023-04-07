import '../../App.css'
import React from 'react'

function Accessibility() {
  return (
    <div className='standard-page'>
      <h1 className='title'>Why Accessibility?</h1>
      <h2 className='subtitle'>Understanding the need for accessibility in today's online world.</h2>
      <p>
      The Web and Internet in today’s society is becoming increasingly important, as an essential resource for accessing information, communicating with others, as well as being used in supporting many aspects of life such as in education, employment, government, commerce, health care and recreation. As such, it is crucial that the Web is accessible to everyone to ensure equal access and opportunity.
      </p>
      <br/>
      <p>
      Fundamentally, the Web can be designed in such a way that anyone - no matter their technological or physical ability, language or location, can use it. In this manner, the Web can help those with disabilities participate more actively in society, as it has the ability to remove barriers to communication and interaction that many experience in the physical world. This comes with the caveat that websites, applications and technologies on the Web are in fact designed with accessibility in mind - such barriers can persist to exclude individuals from using the web, if they are not.
      </p>
      <br/>
      <p>
      The definition of web accessibility according to W3C, means “that websites, tools, and technologies are designed and developed so that people with disabilities can use them”. This is specifically in the way that any person can perceive, understand, navigate, and interact with the Web, as well as contribute to it.
      </p>
      <figure>
        <img
          src="images/disability-types.jpg"
          alt="Impairment: Cognitive, Visual, Auditory, Motor, Speech"
        />
        <figcaption>Different types of impairment and disabilities.</figcaption>
      </figure>
      <p>Supporting the community of those with disabilities on the Web - which in its’ most ideal form - removes barriers that they experience in the physical world, is key to creating a more inclusive society - and most would argue is the right thing to do.</p>
      <br/>
      <h2>There are several perspectives to consider about why web accessibility is important:</h2>
      <h2>
        Business Perspective
      </h2>
      <h3>Increased Market Reach</h3>
      <p>
      Currently at least one billion people - that is 15% of the population - have a recognized disability, and as the population continues aging, this number will continue to grow as age-related impairments also need to be addressed by accessibility features. Even if those with non-recognized disabilities were not considered, there are nonetheless numerous market segments who need accessibility to successfully use a site - such as those with lower bandwidth connections, new or infrequent users, those with temporary impairments, or those with older technologies. If these segments are overlooked, sites miss out on the chance to address a large consumer base needs. Accessible design considerations also encourage greater brand loyalty and a better customer experience, especially for groups whose needs have not been sufficiently addressed. 
      </p>
      <h3>Better SEO (Search Engine Optimization)</h3>
      <p>
      Websites that increase accessibility, can simultaneously increase their finability as they expose more content (especially text-based) for search engines to parse. Most search engine algorithms rely on text, not images, thus sites that include alternative text for images and multimedia are more likely to get higher scores. Additionally some search engines are unable to access script-generated content, such as mouse-overs, so having sites that address this through screen readers also increases their weight.
      </p>
      <h3>Mitigate Legal Risk</h3>
      <p>
      Accessibility is not only nice to have in web technology, but the rights involving the rights of individuals with disabilities to participate in digital services and accessing information have become increasingly mandated by laws and policies. Failing to provide equivalent access for people with disabilities can result in fines, and customers who feel they have been discriminated against can take legal action. Hence, consideration of the legal risk that comes with not meeting accessibility guidelines is crucial for those creating web-based technology to protect their assets, as well as their reputation.
      </p>
      <h2>
        Usability Perspective
      </h2>
      <h3>Benefits to all stakeholders</h3>
      <p>
      Web accessibility is absolutely essential to people with disabilities, though it should be noted that it also benefits people without disabilities. Such groups include older people with age-related impairments, people with low literacy or who are not fluent in the language, people using lower-bandwidth or using older technologies, people who are new to the internet or use it infrequently and even mobile phone users. 
      </p>
      <h3>Improved user experience</h3>
      <p>
      Web accessibility at its core lends itself to a more user-friendly experience - accounting for people with and without disabilities in a variety of situations. For instance, video transcripts can be skimmed, as opposed to watched or listened to, used without needing to download video files, used offline, be printed or be converted to braille. Even in this example, such an accessible technology can be used in noisy environments, with a mobile display, or in a place with lower bandwidth. In general, technologies adhering to accessibility principles, such as clear and consistent design, dividing information blocks into groups,  supplemental illustrations, keeping language simple and precise, good color contrast and faster loading times - clearly all support a better user experience on the web.
      </p>

    </div>
  )
}

export default Accessibility