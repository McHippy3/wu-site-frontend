import React from 'react'
import './contact.css'

function Contact(props) {
  return (
    <div className="section" id="contact">
        <h3 className="heading">Contact</h3>
        <div id="social-container">
          <a href="mailto:dwu2010@live.ca">Email</a>
          <a href="https://www.linkedin.com/in/david-wu-582621199/">LinkedIn</a>
          <a href="https://github.com/McHippy3">GitHub</a>
          <a href="https://twitter.com/McHippy2">Twitter</a>
        </div>
        <div class="attributions">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
        <div class="attributions">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default Contact