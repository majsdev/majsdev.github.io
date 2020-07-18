import React from 'react';

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

    return (
        <div className="WorkDisplay">
            <h4>{work.name}</h4>
            <div className="work-display-body">
                Coming soon
            </div>
        </div>
    );
}

export default WorkDisplay;
