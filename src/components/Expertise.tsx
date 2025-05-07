import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faUnity, faApple, faAndroid, faSteamSymbol } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faServer, faVrCardboard} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "c#",
    "Unity",
    "2D and 3D",
    "Game Design Patterns",
    "AI Game Patterns",
];

const labelsSecond = [
    "Git",
    "Golang",
    "Docker",
    "AWS",
    "Linux",
    "DynamoDB",
    "Redis",
    "Javascript",
    "TypeScript",
    "Playfab",
    "Jenkins"
];

const labelsThird = [
    "Objective C",
    "Java",
    "Platform Integration",
    "Profiling",
    "C++ (Basic)",
    "XR/VR development"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/*<FontAwesomeIcon icon={faUnity} size="3x"/>*/}
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Game Development</h3>
                    <p>I have developed a diverse portfolio of games and interactive experiences using Unity and C#. From 2D platformers to 3D environments, I have extensive experience in game mechanics implementation, physics systems, and optimization. I possess strong proficiency in the complete game development lifecycle, including asset integration, performance optimization, and cross-platform deployment.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend & DevOps</h3>
                    <p>I have architected and implemented robust backend services for multiplayer games using Golang and Node.js on AWS infrastructure. My experience includes building real-time event systems, leaderboard services with high-throughput data processing, and social features including guild management and player interactions. I specialize in designing scalable microservices that handle concurrent players, maintain game state consistency, and ensure low-latency communication for seamless gaming experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faApple} size="3x"/>
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <FontAwesomeIcon icon={faVrCardboard} size="3x"/>
                    <FontAwesomeIcon icon={faSteamSymbol} size="3x"/>
                    <h3>Cross-platform expertise</h3>
                    <p>I have extensive experience in cross-platform development, creating native applications and games across multiple ecosystems. On iOS, I've developed apps and games using Swift and Objective-C, including custom native plugins for Unity integration. For Android, I've built Java-based applications and native libraries, ensuring optimal performance across diverse device specifications. With foundational knowledge in C++, I've contributed to Steam game development and platform-specific optimizations. As a passionate developer, I explore emerging technologies through side projects in VR using Unity, bridging the gap between traditional and immersive computing platforms.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;