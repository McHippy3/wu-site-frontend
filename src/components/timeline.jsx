import React from 'react'
import './timeline.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(props) {
  return (
    <div className="section" id="timeline">
      <h1>Education and Experience Timeline</h1>
      <VerticalTimeline layout={'1-column'}>

        <VerticalTimelineElement
          className={'timeline-element'}
          date={'2016 - 2020'}
          iconStyle={{ backgroundColor: 'red', }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
        >
          <h3 className="vertical-timeline-element-title">High School Diploma</h3>
          <h4 className="vertical-timeline-element-subtitle">Katy High School</h4>
          <p>
            Graduated from Katy High School with a 4.0/4.0 GPA. Received title of Salutatorian for ranking 2nd out of 732 students.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={'timeline-element'}
          date={'2019 - 2020'}
          iconStyle={{ backgroundColor: '#1fa5db', }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
        >
          <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Tecmend</h4>
          <p>
            Worked as an unpaid after-school intern at Houston-based software firm Tecmend.
            Directly contributed to a wide variety of real-world software applications while gaining proficiency in technologies/frameworks such
            as Django, REST, GraphQL, MySQL, Google OR-Tools, etc. Regularly collaborated with offshore development teams to improve efficiency and debug.
            Important projects include an e-Learning platform and a full-stack Telegram-based messaging application.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={'timeline-element'}
          date={'2020 - 2025'}
          iconStyle={{ backgroundColor: 'red', }}
          icon={<i class="fas fa-graduation-cap"></i>}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelors of Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Waterloo</h4>
          <p>
            Enrolled as an Honors Computer Science student with co-op. 
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Timeline