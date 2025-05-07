import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rogue Harbour - Vancouver, BC</h4>
            <p>
              Architected scalable game server infrastructures supporting 1M+ concurrent players across multiple titles, reduced cloud costs through optimization initiatives, and led backend teams in developing real-time multiplayer systems and game economies. Spearheaded client-side development including core game mechanics implementation. Established infrastructure cost estimation frameworks used across 5+ projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Hipper Hippo - Vancouver, Canada</h4>
            <p>
              Led end-to-end development of Guilds feature for Tap Cats mobile game, architecting and implementing full-stack solutions including RESTful/WebSocket APIs and backend services, resulting in increased player retention and successful worldwide deployment on Google Play Store.
              Engineered and maintained critical server-side tools and infrastructure for Adventure Capitalist's China version, optimizing performance for the Asian market while ensuring compliance with local regulations.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Fuelpowered - Vancouver, Canada</h4>
            <p>
              Led critical feature development across multiple high-profile mobile games including Sonic Dash, Beast Quest, and Crazy Defense Heroes, specializing in live event systems implementation, AR integration, and platform conversions that significantly increased player engagement.
              Architected and implemented full-stack solutions for diverse gaming projects, including Master Chef: Judge Table and Sea-Legs, delivering comprehensive features from gameplay mechanics to server infrastructure while maintaining high reliability and uptime for live event services.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2015"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">DeNA - Vancouver, Canada</h4>
            <p>
              Led engineering for GIJOE Battleground: Managed live operations, bug fixes, and event deployments while maintaining platform stability.
              Core developer for Super Battle Tactics and Military Master titles, spearheading maintenance and feature development initiatives.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2012 - 2015"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">DeNa - San Francisco, United States</h4>
            <p>
              Developed comprehensive features for GIJOE Battleground utilizing proprietary engine, implementing both server backend and client systems, including gameplay mechanics, battle AI, unit testing frameworks, and database structure design.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2012"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Time Professor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad Viña del Mar, Chile</h4>
            <p>
              Professor of Mobile Development and Programming Paradigms, developed cross-platform radio frequency streaming applications.
              Two-time MOE Project Winner for mobile app innovation and educational robotics implementation.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;