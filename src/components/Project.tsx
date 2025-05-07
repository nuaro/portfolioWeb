import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Please Stay Calm</h2></a>
                <p>Collaborated on the engine migration initiative, working as part of the development team to convert the game from Cocos to Unity for Android platform support. The game is a location-based zombie survival RPG where players use GPS to navigate real-world environments, engage in PvE/PvP combat, and collaborate with local players to build survivor camps and gather resources.
                </p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Beast Quest</h2></a>
                <p>Contributed to the development of this fantasy action-adventure mobile game based on the popular book series. Focused on implementing 3D gameplay features, integrating mobile advertising systems, and developing time-limited events to drive player engagement. The game features epic battles against legendary creatures, immersive quest-driven gameplay, and regular seasonal content updates.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Groove Galaxy</h2></a>
                <p>Played a key role in expanding the Groove franchise from the original "Groove Planet" to its sequel "Groove Galaxy". Specialized in designing and implementing diverse planetary environments and unique universe settings where players engage in rhythm-based gameplay. Each planet features distinct musical themes, challenging patterns, and progression systems that enhance the core rhythm-matching mechanics of the game.
                </p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>"He-Man: Tappers of Grayskull"</h2></a>
                <p>      Contributed to the development of this Masters of the Universe idle-tapper game. Implemented key features including the Prestige system for advanced progression mechanics and the She-Ra expansion world that broadened the game universe. Developed and integrated live-time events system to maintain player engagement through limited-time challenges and rewards based on the rich MOTU universe.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Disaster Town Tycoon</h2></a>
                <p>
                    Solely responsible for developing critical backend infrastructure and key client features. On the backend, designed and implemented the complete leaderboard system architecture, live events management system, and comprehensive anti-cheat detection and prevention mechanisms. Engineered an advanced analytics pipeline that integrated MAX ad revenue data with DeltaDNA (Unity Analytics) for precise revenue tracking and analysis.
                </p>
                <p>
                    On the client side, spearheaded the development of the comprehensive map system feature that formed the core of the city-building experience, enabling players to create and manage their disaster-prone municipalities.
                </p>

            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>"BillionAir"</h2></a>
                <p>
                    Solely responsible for developing the comprehensive backend infrastructure, implementing sophisticated design patterns to manage complex airport operations. Engineered the complete leaderboard system architecture, live events management system, and robust anti-cheat detection mechanisms. Developed an advanced analytics pipeline integrating MAX ad revenue data with DeltaDNA (Unity Analytics) for precise revenue tracking and analysis.
                </p>
                <p>
                    Implemented advanced architectural patterns including state machines and behavior patterns to manage various airport building states and operations. This pattern-driven approach ensured maintainable, scalable code while handling complex state transitions for terminals, runways, and aviation facilities. The client-side airport map system was built using these patterns, enabling fluid interactions and state management across all aviation infrastructure and airport services.
                </p>
                <p className="tech-stack">
                    Technologies: State Machine Pattern, Behavior Patterns, DeltaDNA Analytics, MAX Ad Integration, Server-side Anti-cheat Systems, Real-time Leaderboards
                </p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Potions And Spells
                </h2></a>
                <p>
                    Solely responsible for developing the comprehensive backend infrastructure, implementing sophisticated design patterns to manage building generator view states. Developed an advanced analytics pipeline integrating MAX ad revenue data with DeltaDNA (Unity Analytics) for precise revenue tracking and analysis.
                </p>
                <p>
                    Implemented advanced architectural patterns including state machines and behavior patterns to manage various building generator states and magical operations. The client-side dynamic tilemap system was a key innovation, designed to automatically expand based on player progression and needs, creating an organic and responsive magical workshop environment. This pattern-driven approach ensured maintainable, scalable code while handling complex state transitions for building generation and magical facilities.
                </p>
                <p className="tech-stack">
                    Technologies: Dynamic Tilemap System, State Machine Pattern, Behavior Patterns, DeltaDNA Analytics, MAX Ad Integration
                </p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Thomas & Friends: Race On!</h2></a>
                <p>Specialized in developing augmented reality features for this official Thomas & Friends mobile game. Implemented cross-platform AR functionality using AR SDKs for both iOS and Android, creating an interactive racing experience where players could place and race trains in their real-world environment. Additionally, developed a photo booth feature enabling young fans to take pictures with their favorite Thomas & Friends characters in AR, enhancing the game's interactive experience.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Sonic Dash</h2></a>
                <p>
                    Successfully integrated and implemented live event systems utilizing the FuelPowered backend infrastructure from my previous role. Developed robust server communication protocols and gameplay mechanics for dynamic event management, enhancing player engagement through time-limited challenges and special events.
                </p>
                <p>
                    Key achievements included seamless integration of real-time event triggers, leaderboard systems, and event-specific gameplay mechanics. The implementation enabled dynamic content updates and event-driven gameplay features without requiring client updates, significantly improving the game's ability to maintain player engagement through fresh content.
                </p>
                <p className="tech-stack">
                    Technologies: FuelPowered Backend Integration, Real-time Event Systems, RESTful APIs, Server-Side Event Management, Mobile Game Development
                </p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Crazy Defend Heroes</h2></a>
                <p>
                    Played a key role in the critical initiative to port the existing Cocos2dx-based game to Unity engine. Led the reimplementation of core game systems while maintaining gameplay fidelity and improving performance in the new engine environment.
                </p>
                <p>
                    Successfully translated and optimized complex game mechanics, including tower placement systems, enemy pathing algorithms, and wave management systems from Cocos2dx to Unity's architecture. The migration process involved careful attention to maintaining the original game feel while leveraging Unity's enhanced capabilities for improved performance and future scalability.
                </p>
                <p>
                    Implemented performance optimizations specific to Unity's architecture, ensuring smooth gameplay across various device specifications. The successful migration provided a more maintainable codebase and enabled faster feature development cycles.
                </p>
                <p className="tech-stack">
                    Technologies: Unity Engine, C#, Cocos2dx, C++, Mobile Game Development, Performance Optimization, Tower Defense Systems
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;