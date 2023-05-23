import { Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import codeEditor from './images/codeEditor.png';
import cerHTML from './images/cerHTML.png';
import cerCSS from './images/cerCSS.png';
import cerJS from './images/cerJS.png';
import reactCer from './images/reactCer.png';
import JsIntermediate from './images/JsIntermediate.png';
import cssIntermediate from './images/cssIntermediate.png';
import JSclassModule from './images/JSclassModule.png';
import projectJustfit from './images/projectJustfit.png';
import todolist from './images/todolist.png';

function App() {
  return (
    <div className="App">
       <Navbar className="nav-bar" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle ms-auto" />
            <Navbar.Collapse id="basic-navbar-nav" className="ml-auto justify-content-center align-item-center">
              <Nav className="menu-bar">
                <Nav.Link href="#about-me">About me & Skills</Nav.Link>
                <Nav.Link href="#my-projects">My Projects</Nav.Link>
                <Nav.Link href="#my-exp">My Experience</Nav.Link>
                <Nav.Link href="#certifications">Certifications</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="about-me">
        <div className="image-about-me">
          <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/157123602_3876172065804918_3791693431658880305_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=6mBMSAwWSjUAX8wEGaw&_nc_oc=AQnOzLMC6218oC30eCz1YZ8D524sp8q0zYo-S8PuvI9hM0SLyafihbdksFh14chZFUKgNMKiQ_CS_-RVOGptM8W0&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfCpt9RI5oGrpHoHuIBfdNmK5YPNjmOeN3RkHM4t8HPkqQ&oe=6473FCD1" alt="profile"/>
        </div>
        <div className="text-about-me">
          <div className="typewriter">
            <h1>Hi I'm Eakkarunpoom</h1>
            <h3>I'm looking <span>Frontend Developer !</span></h3>
            <p>I was Process Engineer at Industrial factory. I have aspirations to change my field of work to Web developer.
            I self-learning about HTML, CSS and JavaScript then I join bootcamp of Generation about Junior Software Developer cohort 4.<br /><br />
            Now I'm looking for more experience about Frontend developer.</p>
            <div className="btn">
              <a href="resume_Eakkarunpoom_Tanyianniti.pdf" download><button>Resume</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="row">
          <div className="col">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
          </div>
          <div className="col">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" />
          </div>
          <div className="col">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" />
          </div>
          <div className="col">
            <img src="https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="bootstrap" />
          </div>
          <div className="col">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="reactjs" />
          </div>
          <div className="col">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="nodejs" />
          </div>
        </div>
      </div>
      <div id="my-projects">
        <h1>My Projects</h1>
        <div className="row-pj">
          <div className="col-pj">
            <div className='img-pj'>
              <img src={codeEditor} alt="codeEditor" />
            </div>
            <div className="intro">
              <p>Code Editor</p>
            </div>
            <div className="btnn">
              <a href="https://github.com/eakkarunpoom/eakkarunpoom.github.io" target="_blank" rel="noopener noreferrer"><button>Github</button></a>
              <a href="https://eakkarunpoom.github.io" target="_blank" rel="noopener noreferrer"><button>Demo</button></a>
            </div> 
          </div>
          <div className="col-pj">
            <div className='img-pj'>
              <img src={projectJustfit} alt="justfit"/>
            </div>
            <div className="intro">
              <p>JustFit</p>
            </div>
            <div className="btnn">
              <div className='link-github'>
                <a href="https://github.com/eakkarunpoom/justfit-D2" target="_blank" rel="noopener noreferrer"><button>Github</button></a>
              </div>
              <div className='link-demo'>
                <a href="https://justfit-d2-sbg9.vercel.app/" target="_blank" rel="noopener noreferrer"><button>Demo</button></a>
              </div>
            </div>
          </div>
          <div className="col-pj">
            <div className='img-pj'>
              <img src={todolist} alt="todolist"/>
            </div>
            <div className="intro">
              <p>Todo List</p>
            </div>
            <div className="btnn">
              <div className='link-github'>
                <a href="https://github.com/eakkarunpoom/todolistProject" target="_blank" rel="noopener noreferrer"><button>Github</button></a>
              </div>
              <div className='link-demo'>
                <a href="https://todolist-project-six.vercel.app/" target="_blank" rel="noopener noreferrer"><button>Demo</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="my-exp">
        <h1>My Experience</h1>
        <h3>Work Experience</h3>
        <div className="work-exp">
          <div className="image-work-exp">
            <img src="https://media.jobthai.com/v1/images/logo-pic-map/121412_logo_20200522171307.png" alt="work-experience" />
          </div>
          <div className="text-exp">
            <h4>May 2022 - Feb 2023</h4>
            <h5>Sumida Electric Company</h5>
            <h4>Process Engineer</h4>
            <ul>
              <li>Analyze problem and Improvement defect in production line.</li>
              <li>DOE/Buyoff New model and New machine.</li>
              <li>Test materials</li>
              <li>Training new operator</li>
              <li>Summary report about Analyze and Improvement, DOE/Buyoff, Trial run, Yield report.</li>
              <li>Document Control about Control plan, Operation manual, Temporary Engineering
              change notice (TECN), Engineering change notice (ECN)
              </li>
            </ul>
          </div>
        </div>
        <div className="edu-exp">
        <h3>Education Experience</h3>
          <div className="row-edu">
            <div className="col-image">
              <img src="https://sukitb.vercel.app/assets/Generation.397e8b5f.svg" alt="generation"/>          
            </div>
            <div className="col-text">
              <h4>Feb 2023 - May 2023</h4>
              <h5>Generation Thailand</h5>
              <h4>Junior Software Developer</h4>
              <ul>
                <li>Junior Software Developer (MERN STACK), 14 Weeks (full-time)</li>
                <li>Technical Skills: HTML, CSS, JavaScript, ReactJS, NodeJS, Express, Relational databases, MongoDB</li>
                <li>Behaviours and Mindsets</li>
                <li>Member of Cohort Leader (JSD4)</li>
              </ul>
            </div>
          </div>
            <div className="row-edu">
              <div className="col-image">
                <img src="https://www.nu.ac.th/wp-content/uploads/2017/06/NULOGO-Download-297x300.png" alt="nu" />
              </div>
              <div className="col-text">
                <h4>2017 - 2021</h4>
                <h5>Naresuan University</h5>
                <h4>Industrial Engineer</h4>
                <ul>
                  <li>Enterprise Resource Planning Case study by Odoo 12</li>
                  <li>Industrial sporting events, soccer and Basketball.</li>
                  <li>Member of Volunteers Engineer Club in 2019-2020</li>
                  <li>Physics and Calculus tutor In Tutoring Junior Project</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div id="certifications">
        <h1>Certifications</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cerHTML}
              alt="HTML"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cerCSS}
              alt="CSS"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cssIntermediate}
              alt="cssIntermediate"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cerJS}
              alt="JS"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={JsIntermediate}
              alt="JsIntermediate"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={JSclassModule}
              alt="JSclassModule"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-732adfca-a5d6-4935-b5c4-a69af62448c0.jpg?v=1681571732000"
              alt="JS-02"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={reactCer}
              alt="JS-02"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="footer">
      <h1>Contact me</h1>
        <div className="contact">
          <a href="mailto:eakkarunpoom.ta@gmail.com" target="_blank"  rel="noopener noreferrer"><button>E-mail</button></a>
          <a href="https://www.linkedin.com/in/eakkarunpoom/" target="_blank"  rel="noopener noreferrer"><button>Linkedin</button></a>
          <a href="https://github.com/eakkarunpoom?tab=repositories" target="_blank"  rel="noopener noreferrer"><button>Github</button></a>
        </div>
      </div>  
    </div>
  );
}

export default App;
