import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './projects.css';

export const ProjectsList = () =>
  [
    <div className='tile' key={0}>
      <img src={require('./images/dwusite-projects.jpg')} alt='about me website' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>About Me Website</p>
        <p className='project-tools'>ReactJS, Nginx</p>
        <p>
          The website you're seeing right now. Deployed on a DigitalOcean droplet and running on an Nginx web server. 
      </p>
      </div>
      <div className='button-container'>
        <a className='source-link' href='https://github.com/McHippy3/wu-site-frontend'>View Source</a>
      </div>
    </div>,

    <div className='tile' key={1}>
      <img src={require('./images/scheduler.png')} alt='program for schedule optimization' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>Work Schedule Optimizer</p>
        <p className='project-tools'>Django, Google OR-Tools</p>
        <p>
          A constraint based optimization program that generates employee schedules based on qualifications and attendance. 
          Source code owned by <a href="https://tecmend.com/" style={{textDecoration: 'None'}}>Tecmend</a>.
      </p>
      </div>
      <div className='button-container'>
        <p className='source-link' style={{ backgroundColor: 'gray', display: 'inline' }}>Source Unavailable</p>
      </div>
    </div>,

    <div className='tile' key={2}>
      <img src={require('./images/quick_pick.png')} alt='flutter app called quick pick' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>Quick Pick Mobile App</p>
        <p className='project-tools'>Flutter - Dart</p>
        <p>
          Cross-platform mobile application that selects clothing based on weather and availability. 
        </p>
      </div>
      <div className='button-container'>
        <a className='source-link' href='https://github.com/McHippy3/quick-pick'>View Source</a>
      </div>
    </div>,

    <div className='tile' key={3}>
      <img src={require('./images/settlers.png')} alt='recreation of settlers of catan' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>Settlers of Catan Remake</p>
        <p className='project-tools'>Java SE</p>
        <p>
          Fully functional recreation of the classic board game Settlers of Catan in Java. Simulates dice rolling, card drawing, trading and all other features available in the base game. 
        </p>
      </div>
      <div className='button-container'>
        <a className='source-link' href='https://github.com/McHippy3/settlers-of-catan'>View Source</a>
      </div>
    </div>,
  ]

const ArrowLeft = <div><img src={require('./images/arrow_left.png')} alt="left arrow" /></div>
const ArrowRight = <div><img src={require('./images/arrow_right.png')} alt="right arrow" /></div>

function Projects(props) {
  return (
    <div id='projects' className='section'>
      <h3 className='heading'>PROJECTS</h3>
      <div id='projects-list'>
        <ScrollMenu
          data={ProjectsList()}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          dragging={true}
          wheel={false}
          alignCenter={true}
        />
      </div>
    </div>
  );
}

export default Projects