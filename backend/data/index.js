const path = require('path');
const XLSX = require('xlsx');
const { sheet_to_json: sheetToJson } = XLSX.utils;

const getWorkbook = () => XLSX.readFile(path.join(__dirname, './', 'data.ods'));

const eventsWorksheet = getWorkbook().Sheets['Eventbrite Events'];
const submissionsWorksheet = getWorkbook().Sheets.Submissions;

const clone = obj =>  JSON.parse(JSON.stringify(obj));

const eventsJson = () => clone(sheetToJson(eventsWorksheet, { raw: false }));
const submissionsJson = () => clone(sheetToJson(submissionsWorksheet, { raw: false }));


const events = () => eventsJson().map(event => ({
  eventbriteId: event['Event ID'],
  status: event.Status,
  date: event.Date,
  eventUrl: 'https://www.eventbrite.ca/e/' + event['Event ID'],
  githubUrl: event['Github URL'],
  title: event.Title
}));

const toNumeric = string => string ? +string : null;
const notNull = (...values) => !(values.filter(val => val === null).length);

const submissions = () => submissionsJson().map((submission) => {
  const tags = [submission.tag1, submission.tag2, submission.tag3].filter(x => !!x);

  const {
    aesthetics,
    aestheticsComments,
    codeQuality,
    codeQualityComments,
    codeReview,
    codeReviewComments
  } = submission;

  const aestheticsNumeric = toNumeric(aesthetics);
  const codeQualityNumeric = toNumeric(codeQuality);
  const codeReviewNumeric = toNumeric(codeReview);

  const isScored = notNull(aestheticsNumeric, codeQualityNumeric, codeReviewNumeric);
  const finalScore = Math.round((aestheticsNumeric + codeQualityNumeric + codeReviewNumeric) / 3);

  return {
    githubId: submission['Github ID'],
    email: submission.Email,
    pullRequestUrl: submission['PR URL'],
    event: events().find(e => e.eventbriteId === submission['Event ID']),
    tags,
    isScored,
    finalScore,
    aesthetics: {
      score: aestheticsNumeric,
      comments: aestheticsComments
    },
    codeQuality: {
      score: codeQualityNumeric,
      comments: codeQualityComments
    },
    codeReview: {
      score: codeReviewNumeric,
      comments: codeReviewComments
    }
  };
});

const getEvents = () => events;
const getEvent = eventDate => eventsJson().find(row => row.Date === eventDate);
const getSubmissions = () => submissions();
const getSubmissionsByEmail = email => submissions().filter(s => s.email.trim().toLowerCase() === email.trim().toLowerCase());

module.exports = {
  getEvent,
  getEvents,
  getSubmissions,
  getSubmissionsByEmail
};
