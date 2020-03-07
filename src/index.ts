import * as hapi from 'hapi';

const server: hapi.Server = new hapi.Server({
  host: 'localhost',
  port: 8086,
});

server.route({
  method: 'GET',
  path: '/ping',
  handler: function(request, h) {
    return 'pong';
  },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

start();
