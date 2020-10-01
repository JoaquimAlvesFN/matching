import { schedule } from 'node-cron';

import CreateMatchService from '../services/CreateMatchService';

 async function sixHourSchedule(): Promise<void> {
    const time = schedule('* * 6 * * *', async () => {
        console.log('Executando o Match.');
        const matchService = new CreateMatchService();
        await matchService.execute();
    });

    time.start();
}

export default sixHourSchedule;