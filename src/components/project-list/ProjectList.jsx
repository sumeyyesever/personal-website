import React, { useEffect, useState } from 'react';
import { projectData } from '../../../project_data';

export default function ProjectList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, []);

    return (
        <div>
            {data.map((post, index) => (
                <div key={index} className='project-container'>
                    <img className="project-img" src={post.project_img} alt="Project" />
                    <div className="project-links">
                        <a href={post.github} target="_blank" rel="noopener noreferrer">
                            <span className="project-link">▶ Code</span>
                        </a>
                        <a href={post.demo} target="_blank" rel="noopener noreferrer">
                            <span className="project-link">▶ Live</span>
                        </a>
                    </div>
                    <p
                        className="project-par"
                        dangerouslySetInnerHTML={{ __html: post.project_par }}
                    />
                    <hr className="project-hr" />
                </div>

            ))}
        </div>
    );
}

