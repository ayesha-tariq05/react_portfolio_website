import { useState } from 'react'
function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      <h1>About Me</h1>

      <p>
        I am a Software Engineering student.
        {showMore && (
          <span>
            I am passionate about learning new technologies, building projects,
            and improving my skills in web development and data analytics.
      <h1>My Hobbies</h1>
      <li>Exploring world of tech</li>
      <li>Book Reading</li>
      <li>Self improvement</li>
      
      <h1>My Interests</h1>
      <li>Data Analytics and Business Development</li>
      <li>Data Science</li>
      <li>Data bases</li>
      
      
          </span>
        )}
      </p>


      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  )
}

export default About