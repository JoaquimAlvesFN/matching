import { Router } from 'express';

import CreateGravacaoService from '../services/CreateGravacaoService';

const gravacaoRouter = Router();

gravacaoRouter.post('/', async (request, response) => {
    const {
        telefone,
        ramal,
        dataGravacao
    } = request.body;

    const createGravacao = new CreateGravacaoService();

    const gravacao = await createGravacao.execute({
        telefone,
        ramal,
        dataGravacao
    });

    return response.json(gravacao);
});

export default gravacaoRouter;