import "reflect-metadata";
import express from 'express';

import routes from './routes';

import sixHourSchedule from  './lib/SixHoursScheduling';

import './database';

const app = express();
sixHourSchedule();

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log('✔✔ Server Running on port 3333');
});

export default app;