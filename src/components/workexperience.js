import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/workexperience.css';

function Workexperience() {

    const timelineElements = [
        {
            jobTitle: "IT Intern",
            companyAndLocation: "Anadarko Petroleum - The Woodlands, TX",
            bulletPoints: [
                "Worked in ITS Real Time Data Management team",
                "Project involved using C# to develop an application that automates the process of ensuring the data integrity of their assets",
                "The application uses SQL and different API's to detect data gaps and/or data type mismatch between their source HMI systems and their enterprise time-series database"
            ],
            date: "May 2019 - Aug 2019"         
        },
        {
            jobTitle: "Teaching Assistant",
            companyAndLocation: "Texas A&M University - College Station, TX",
            bulletPoints: [
                "Helped and mentored students in a freshman engineering course understand the basics of programming",
                "Graded assignments",
                "Held review sessions for students"
            ],
            date: "Aug 2018 - May 2020"         
        },
        {
            jobTitle: "Part-time Developer",
            companyAndLocation: "WebCreek - The Woodlands, TX",
            bulletPoints: [
                "Developed a CI/CD system for creating and testing builds for their currently-in-development virtual reality training application",
                "Involved working heavily with: Python, Git, Unity, and C#",
                "Attended daily stand-up meetings with development team",
                "Mentorship program: used Angular frontend and EF Core backend to create a web application"
            ],
            date: "May 2020 - Jan 2021"    
        },
        {
            jobTitle: "Intern Developer",
            companyAndLocation: "Texas Water Development Board - Remote",
            bulletPoints: [
                "Working in the Texas Natural Resources Information System branch of the TWDB",
                "Project is to make updates/bug fixes to GEMSS (Geospatial Emergency Management Support System), a web app written in JavaScript (AngularJS)",
                "Collaborating with my manager on possible future changes to the application and implementing them"
            ],
            date: "Jul 2020 - May 2021"    
        },
        {
            jobTitle: "Technical Consultant",
            companyAndLocation: "Ashling Partners - Remote",
            bulletPoints: [
                "I am currently a Technical Consultant at Ashling Partners!",
                "I use UiPath and other technologies to develop automations for our clients"
            ],
            date: "Jun 2021 - Present"        
        }
    ];
    
    return (
        <div>
            <h1>Work Experience</h1>
            <VerticalTimeline className="custom-line">
                { timelineElements.map((item, key) => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#95d2f5', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                            date={item.date}
                            iconStyle={{ background: '#95d2f5' }}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title">{item.jobTitle}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.companyAndLocation}</h4>
                            <ul>
                                {item.bulletPoints.map((point, index) => {
                                    return (<li key={index}>{point}</li>)
                                })}
                            </ul>
                        </VerticalTimelineElement>
                    )
                })
                }
            </VerticalTimeline>   
        </div>
        
    );
}
export default Workexperience;