import { Router } from 'express';

import CreateTabulacaoService from '../services/CreateTabulacaoService';

const tabulacaoRouter = Router();

tabulacaoRouter.post('/', async (request, response) => {
    const {
        nomeCliente, 
        protocoloAtendimento, 
        dataAtendimento, 
        numeroBinado, 
        numeroAcesso
    } = request.body;

    const createTabulacao = new CreateTabulacaoService();

    const tabulacao = await createTabulacao.execute({
        nomeCliente, 
        protocoloAtendimento, 
        dataAtendimento, 
        numeroBinado, 
        numeroAcesso
    });

    return response.json(tabulacao);
});

export default tabulacaoRouter;