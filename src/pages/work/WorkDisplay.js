import React from "react";

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
  let techStackJSX = [];
  for (const [index, tech] of Object.entries(techStack) ) {
    techStackJSX.push(<span key={`tech-stack-${id}-${index}`}>{tech}</span>);
  }

  return (
    <div className="WorkDisplay">
      <h4>{name}</h4>
      <div className="work-display-body">
        {/* <img src={require(`${work.thumbNail}`)} alt={work.name}></img> */}
        <p class="desc" v-html="desc">{desc}</p>
        <div class="tech-stack">
          {techStackJSX}
        </div>
      </div>
    </div>
  );
}

export default WorkDisplay;
