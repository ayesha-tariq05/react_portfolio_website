import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact">
      <h1>Contact Me</h1>

      {submitted ? (
        <h3>Message Sent Successfully!</h3>
      ) : (
        <form onSubmit={handleSubmit}>

          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            className="input-field"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  )
}

export default Contact