import { Router } from 'express';

import tabulacaoRouter from './tabulacao.routes';
import gravacaoRouter from './gravacao.routes';
import matchsRouter from './match.routes';

const routes = Router();

//TODO ROTAS
routes.use('/tabulacao', tabulacaoRouter);
routes.use('/gravacao', gravacaoRouter);
routes.use('/match', matchsRouter);

export default routes;