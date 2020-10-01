import { Router } from 'express';
import {getRepository, getManager} from 'typeorm';

import Match from '../models/Match';

const matchRouter = Router();

matchRouter.get('/', async (request, response) => {
    const matchRepository = getRepository(Match);

    const match = await matchRepository.find();
    
    return response.json(match);
});

export default matchRouter;