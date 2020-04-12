const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const { email: emailValidator } = require('../validators/value.validators');
const { getSubmissionsByEmail } = require('../data');

const TAG_MAP = {
  aesthetics: {
    DID_NOT_DEPLOY: 'I looked in the Pull Request, but unfortunately I did not find any links to a deployed version of this project. A higher score can be gained by deploying to a service like Github Pages, Heroku, Codepen, Repl.it, etc.',
    SCREENSHOTS_ONLY: 'I looked in the Pull Request, and I found the screenshots uploaded, but I didn\'t find any deployment URLs or videos. A higher score can be gained by deploying to a service like Github Pages, Heroku, Codepen, Repl.it, etc. OR by uploading videos and linking to them in the Pull Request.',
    HAD_BUGS: 'The project was functional overall, but had bugs in it.',
    RAN_OUT_OF_TIME: 'It looks like the participant ran out of time. This can happen to anyone regardless of skill level, and this is not necessarily a deal-breaker, since code quality and code reviews are much more important.',
    EXTRA_CREDIT_APPLIED: 'The participant earned some extra credit that was applied to the project.',
    NEEDS_MORE_STYLING: 'The project would benefit from having a more visually appealing design. A visually appealing project has the double-advantage of being appealing to employers as well, so it is encouraged to aim for building a well-designed project.',
    COOL: 'This was a really cool project! I had fun reviewing this one.'
  },
  codeQuality: {
    LEFT_COMMENTS_ON_PR: 'I\'ve left comments on the pull request in the form of code comments. Please take a look.',
    TOO_MANY_FILES: 'There were too many files in the PR to be able to review it effectively for scoring. The participant may have inadvertently forgotten to gitignore node_modules, or maybe you included some library files instead of adding them to package.json.'
  },
  codeReview: {
    NEEDS_MORE_PR_COMMENTS: 'This submission would have benefitted from a larger quantity of pull request comments. A good rule of thumb is to leave between 5 and 15 high-quality comments on your peers\' projects.',
    NEEDS_HIGHER_QUALITY_PR_COMMENTS: 'This submission would have benefitted from the participant leaving more useful comments on their peers\' code. A high-quality comment is one that is useful to the author, gently points out their mistakes, or shares software development concepts with them that they could use in the future.',
    GREAT_QUESTIONS_ON_CODE_REVIEW: 'The participant asked some really great questions on their code reviews! They scored some extra points because of that.',
    GREAT_ANSWERS_TO_CODE_REVIEW_COMMENTS: 'The participant addressed comments on theirown Pull Request with a lot of useful information!'
  }
};

const decorate = (scoreName, scoreObject) => {
  const originalComments = scoreObject[scoreName].comments;

  let comments = Object.entries(TAG_MAP[scoreName])
  .filter(([key]) => scoreObject.tags.indexOf(key) >= 0)
  .map(([key, val]) => val);

  originalComments && comments.unshift(originalComments);

  console.log("DECORATE", scoreName, comments);
  scoreObject[scoreName].comments = comments.join('\n\n');
}

module.exports = (server) => {
  // Get all experiences
  server.route({
    method: 'GET',
    path: '/api/v1/score/{developerEmail}',
    options: {
      validate: {
        params: Joi.object({
          developerEmail: emailValidator
        })
      }
    },
    handler: (request, h) => {
      const scores = getSubmissionsByEmail(request.params.developerEmail);
      scores.forEach(score => {
        decorate('aesthetics', score);
        decorate('codeQuality', score);
        decorate('codeReview', score);
      });

      console.log("AFTER DECORATE", scores);
      

      if (scores.length === 0) {
        return Boom.notFound('Could not find submissions for that email');
      } else {
        // aesthetics: {
        //   score: aestheticsNumeric,
        //   comments: aestheticsComments
        // },
          // score.aesthetics.comments = [score.aesthetics.comments, ...aestheticsComments].filter(x => x).join('\n\n').trim()
          // score.codeQuality = {
          //   score: score.codeQuality.score,
          //   comments: [score.codeQuality.comments, ...codeQualityComments].filter(x => x).join('\n\n').trim()
          // };
          // score.codeReview = {
          //   score: score.codeReview.score,
          //   comments: [score.codeReview.comments, ...codeReviewComments].filter(x => x).join('\n\n').trim()
          // };
        // });

        return scores;
      }
    }
  });
};
