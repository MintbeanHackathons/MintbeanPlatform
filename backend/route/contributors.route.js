const Boom = require('@hapi/boom');
const axios = require('axios');
const linkedIn = require('../shared/contributors')

const getLinkedInUrl = username => {
    return linkedIn[username]
}

// Get all contributors
module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/api/v1/contributors',
        handler: async (request, h) => {
            try {
                const { data } = await axios.get(
                    `https://api.github.com/repos/MintbeanHackathons/MintbeanPlatform/contributors`
                );
                const contributors = data;
                for (const contributor of contributors) {
                    const { data } = await axios.get(contributor.url);
                    contributor.name = data.name;
                    if (prefixHttp(data.blog)) {
                        contributor.portfolio = data.blog;
                    }
                    contributor.linkedIn = getLinkedInUrl(contributor.login);
                }
                return contributors;
            } catch (e) {
                throw Boom.badRequest('Was not able to retrieve contributors.')
            }
        }
    });
};

const prefixHttp = url => url.toLowerCase().startsWith('http://') || url.toLowerCase().startsWith('https://')
