'use strict';

const Hapi = require('@hapi/hapi');
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['XXXXXX.servicebus.windows.net:9093'],
    ssl: true,
    sasl: {
        mechanism: 'plain',
        username: '$ConnectionString',
        password: 'Endpoint=sb://XXXXXX.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=XXXXXX'
    }
});

const producer = kafka.producer()

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/',
        handler: async (request, h) => {

            await producer.connect();
            await producer.send({
                topic: 'test',
                messages: [
                    request.payload
                ]
            });

            return { status: 'Message sent' };
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
