const express = require('express');
const app = express();
app.use(express.json());

const jobSeekers = [];
const employers = [];
const jobs = [];

// Register job seeker
app.post('/api/job-seekers/register', (req, res) => {
  const seeker = { id: jobSeekers.length + 1, ...req.body };
  jobSeekers.push(seeker);
  res.status(201).json(seeker);
});

// Register employer
app.post('/api/employers/register', (req, res) => {
  const employer = { id: employers.length + 1, ...req.body };
  employers.push(employer);
  res.status(201).json(employer);
});

// Post a job
app.post('/api/jobs', (req, res) => {
  const job = { id: jobs.length + 1, ...req.body };
  jobs.push(job);
  res.status(201).json(job);
});

// Get all jobs
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
