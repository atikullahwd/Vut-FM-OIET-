exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Bot Orders' },
            footer:{ text: 'YassineHz DEVELOPMENT' },
            fields: [
                { name: 'Music Orders', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `****`,
        },
    });

};
