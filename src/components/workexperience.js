import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Collapse } from 'antd';
import '../styles/workexperience.css';

const { Panel } = Collapse;

function Workexperience() {
    return (
        <div>
            <h1>Work Experience</h1>
            <VerticalTimeline className="custom-line">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#95d2f5', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                    date="May 2019 - Aug 2019"
                    iconStyle={{ background: '#95d2f5' }}
                    dateClassName="date"
                >
                    <h3 className="vertical-timeline-element-title">IT Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Anadarko Petroleum - The Woodlands, TX</h4>
                    <ul>
                        <li>Worked in ITS Real Time Data Management team</li>
                        <li>Project involved using C# to develop an application that automates the process of ensuring the data integrity of their assets</li>
                        <li>
                            The application uses SQL and different API's to detect data gaps 
                            and/or data type mismatch between their source HMI systems and their enterprise time-series database
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#95d2f5', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                    date="Aug 2018 - May 2020"
                    iconStyle={{ background: '#95d2f5' }}
                    dateClassName="date"
                >
                    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Texas A&#38;M University - College Station, TX</h4>
                    <ul>
                        <li>Helped and mentored students in a freshman engineering course understand the basics of programming</li>
                        <li>Graded assignments</li>
                        <li>Held review sessions for students</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#95d2f5', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                    date="May 2020 - Jan 2021"
                    iconStyle={{ background: '#95d2f5' }}
                    dateClassName="date"
                >
                    <h3 className="vertical-timeline-element-title">Part-time Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">WebCreek - The Woodlands, TX</h4>
                    <ul>
                        <li>Developed a CI/CD system for creating and testing builds for their currently-in-development virtual reality training application</li>
                        <li>Involved working heavily with: Python, Git, Unity, and C#</li>
                        <li>Attended daily stand-up meetings with development team</li>
                        <li>Mentorship program: used Angular frontend and EF Core backend to create a web application</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#95d2f5', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                    date="Jul 2020 - May 2021"
                    iconStyle={{ background: '#95d2f5' }}
                    dateClassName="date"
                >
                    <h3 className="vertical-timeline-element-title">Intern Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Texas Water Development Board (Remote) - Austin, TX</h4>
                    <ul>
                        <li>Working in the Texas Natural Resources Information System branch of the TWDB</li>
                        <li>Project is to make updates/bug fixes to GEMSS (Geospatial Emergency Management Support System), 
                            a web app written in JavaScript (AngularJS)
                        </li>
                        <li>Collaborating with my manager on possible future changes to the application and implementing them</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#95d2f5', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                    date="Jun 2021 - Present"
                    iconStyle={{ background: '#95d2f5' }}
                    dateClassName="date"
                >
                    <h3 className="vertical-timeline-element-title">Technical Consultant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Machina Automation - Houston, TX</h4>
                    <ul>
                        <li>I am currently employed as a Technical Consultant at Machina Automation!</li>
                    </ul>
                    
                </VerticalTimelineElement>
            </VerticalTimeline>   
        </div>
        
    );
}
export default Workexperience;