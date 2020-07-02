import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './projects.css';
 
export const ProjectsList = () =>
  [
    <div className='tile'>
      <img src={require('./images/quick_pick.png')} alt='flutter app called quick pick' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>Quick Pick Mobile App</p>
        <p className='project-tools'>Flutter - Dart</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className='button-container'>
        <a className='source-link' href='https://github.com/McHippy3/quick-pick'>View Source</a>
      </div>
    </div>,

    <div className='tile'>
      <img src={require('./images/settlers.png')} alt='recreation of settlers of catan' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>Settlers of Catan Remake</p>
        <p className='project-tools'>Java SE</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className='button-container'>
        <a className='source-link' href='https://github.com/McHippy3/settlers-of-catan'>View Source</a>
      </div>
    </div>,

    <div className='tile'>
      <img src={require('./images/dwusite-projects.jpg')} alt='about me website' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>About Me Website</p>
        <p className='project-tools'>ReactJS</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className='button-container'>
        <a className='source-link' href='https://github.com/McHippy3/wu-site-frontend'>View Source</a>
      </div>
    </div>,

    <div className='tile'>
      <img src={require('./images/scheduler.png')} alt='program for schedule optimization' className='tile-image'></img>
      <div className='text-container'>
        <p className='project-title'>Work Schedule Optimizer</p>
        <p className='project-tools'>Python, Google OR-Tools</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className='button-container'>
        <p className='source-link' style={{backgroundColor:'gray', display: 'inline'}}>Source Unavailable</p>
      </div>
    </div>,
  ]

const ArrowLeft = <div><img src={require('./images/arrow_left.png')} alt="left arrow"/></div>
const ArrowRight = <div><img src={require('./images/arrow_right.png')} alt="right arrow"/></div>
  
function Projects (props) { 
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