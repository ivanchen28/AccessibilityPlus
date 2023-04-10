import '../../../App.css'
import React from 'react'

function HearingLoss() {
  return (
    <>
      <div className='standard-page'>
        <h1 className='title'>Hearing Loss</h1>
        <p>
            According to the World Health Organization, nearly 20% of the global population experiences hearing loss or deafness to varying degrees. However, due to the largely visual nature of the Web, we tend to focus on supporting users who are blind or have low vision and overlook deaf and hard of hearing users. But due to the prevalence of multimedia content like videos online, people who are deaf or hard of hearing often face challenges when content is not designed to be accessible to them.
        </p>
        <p>
            Auditory impairments range from mild or moderate hearing loss (“hard of hearing”) to profound and uncorrectable hearing loss (“deafness”). Although some individuals may be completely deaf, others have some degree of hearing, but sometimes not sufficient enough to understand all audio content.
        </p>
        <figure>
          <img
            src="/AccessibilityPlus/images/demos/hearing-loss/main-card.jpg"
            alt="A boy wearing hearing aids holding a tablet."
          />
          <figcaption>Users with varying degrees of hearing may prefer audio content on its own or in conjunction with captioning, or rely solely captions.</figcaption>
        </figure>
        <p>
            Common examples of barriers for users with auditory impairments include:
        </p>
        <ul>
          <li>Audio content, such as videos with sound or podcasts, without accompanying captions or transcripts.</li>
          <li>Inaccurate or incomplete captions. For example, video audio saying to “broil on high for four to five minutes” that gets captioned as “broil on high for forty-five minutes” would give a user reliant on captions incorrect and downright dangerous instructions.</li>
          <li>Auto-playing audio content. For example, a deaf or hard of hearing individual would have a hard time realizing that the webpage they’re currently on has an auto-playing video advertisement and inadvertently play loud audio.</li>
          <li>Media players without controls to stop, pause, and adjust audio volume.</li>
        </ul>
        <p>
            <a href="https://www.tpgi.com/sounding-out-the-web-accessibility-for-deaf-and-hard-of-hearing-people-part-2/">Ruth MacMullen</a>, an academic librarian who has been profoundly deaf since birth, has spoken about how her deafness affects her needs when it comes to using the Web. Drawing from her experiences, the following are some recommendations on how to improve accessibility for deaf and hard of hearing people, with an emphasis on <b>clear communication</b> and <b>flexibility of content</b>:
        </p>
        <ul>
            <li><u>Provide accurate captions for video with sound and full transcripts for all audio content.</u> Automated captions in particular should be checked for accuracy or inappropriate content. As Ruth noted, “even a little bit of effort made to clean up captions makes a huge difference to a deaf user.”</li>
            <li>When complete and accurate captions or transcripts are not possible, the next best alternative is to <u>provide a descriptive summary of audio and video content</u>. For example, a summary of a video could be as simple as a list of topics that the video includes.</li>
            <li>Include media players that <u>allow users to fully control the video that they are playing</u>. Provide volume controls and options to display captions and adjust caption text size and colours.</li>
            <li><u>Use <a href="https://www.w3.org/WAI/tutorials/page-structure/content/">semantic HTML</a> to keep web content structured with headings, paragraphs, lists, etc.</u> Since deaf and hard of hearing users are so reliant on visual information, the more clearly structured the content is, the easier it is for the user to engage with it.</li>
        </ul>
        <p>
            While accessible audio content is essential to deaf and hard of hearing users, they are also useful for everyone. Accessibility features can also be used by people without disabilities in a variety of situations. For example, captions can be used in loud environments where users cannot hear the audio or in quiet environments where users cannot turn on sound, or by users who are not native speakers of the spoken language. Ultimately, making the web more accessible benefits everyone.
        </p>
        <p>
            For more resources, see the <a href="https://www.w3.org/WAI/media/av/">Web Accessibility Initiative's guidelines</a> on making audio and video media accessible. 
        </p>
      </div>
    </>
  )
}

export default HearingLoss