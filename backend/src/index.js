import * as fastify from 'fastify';
// Create a http server. We pass the relevant typings for our http version used.
// By passing types we get correctly typed access to the underlying http objects in routes.
// If using http2 we'd pass <http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>
const server = fastify.fastify({});
server.get('/ping', (request, reply) => {
    console.log('PINGGER')
    reply.code(200).send({ pong: 'it worked!!' });
});

await server.listen(3030);
