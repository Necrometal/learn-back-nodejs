import express, { Application } from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { port } from './configs/app';
import home from './router';
import user from './router/user'

const app: Application = express();

// using dependencies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// using route
app.use('/', home)
app.use('/user', user)

app.use((req, res, next) => {
  next(createError(404, 'Api not found'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})