import { getRepository } from 'typeorm';

import Gravacao from '../models/Gravacao';

interface Request {
    telefone: string;
    ramal: string;
    dataGravacao: Date;
}

class CreateGravacaoService {
    public async execute({telefone, ramal, dataGravacao}: Request): Promise<Gravacao> {
        try {
            const gravacaoRepository = getRepository(Gravacao);

            const gravacao = gravacaoRepository.create({
                telefone,
                ramal,
                dataGravacao
            });

            await gravacaoRepository.save(gravacao);

            return gravacao;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default CreateGravacaoService;