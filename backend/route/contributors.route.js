const axios = require('axios');

const getLinkedInUrl = username => {
    const linkedIn = {
        'sophyphreak': 'https://www.linkedin.com/in/sophyphreak/'
    }
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
                    contributor.portfolio = data.blog;
                    contributor.linkedIn = getLinkedInUrl(contributor.login);
                }
                return contributors;
            } catch (e) {
                throw Boom.badRequest('Was not able to retrieve contributors.')
            }
        }
    });
};
