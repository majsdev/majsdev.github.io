const post = {
  title: 'Connections within Docker Containers',
  date: '12/23/2021',
  content: `
  <div>
  <p>
  When connecting from a web service to a postgres database within docker containers in the same network, using 'localhost' will not work.
  Instead, use the name of the posrgres service defined in docker-compose or 'host.docker.internal'
  </p>
  <p>
  See <a href="https://docs.docker.com/compose/networking/" tagert=_blank>doc</a>
  </p>
  
  </div>
  `,
};

export default post;
