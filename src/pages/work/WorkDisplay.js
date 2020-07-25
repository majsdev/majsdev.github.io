import React from "react";
import "./WorkDisplay.css";

/**
 * work: {
 *      name: 'Twitter Clone',
 *      id: 'twitter-clone',
 *      link: '',
 *      techStack:  ['Nginx', 'NodeJs', 'MongoDB', 'Cassandra', 'RabbitMQ'],
 *      desc: 'Able to withstand over one million read/write requests per hour given limited resources.',
 *      dateOrStatus: '03/2018 -- 05/2018'
 * }
 */

function WorkDisplay({ work }) {
  const { id, name, desc, techStack } = work;
  const dangerousDesc = { __html: desc };
  let techStackJSX = [];
  for (const [index, tech] of Object.entries(techStack)) {
    techStackJSX.push(<span key={`tech-stack-${id}-${index}`}>{tech}</span>);
  }

  return (
    <div className="WorkDisplay">
      <h4 className="displayName">{name}</h4>
      <div className="work-display-body">
        {/* NOTE: path for image is not stored in a variable is because react doesn't resolve it */}
        {work.thumbNail !== undefined && (
          <img
            className="project-image"
            src={require(`../../images/projects/${work.thumbNail}`)}
            alt={work.name}
          />
        )}

        <p className="desc" dangerouslySetInnerHTML={dangerousDesc}></p>
        <div className="tech-stack">{techStackJSX}</div>
      </div>
    </div>
  );
}

export default WorkDisplay;
