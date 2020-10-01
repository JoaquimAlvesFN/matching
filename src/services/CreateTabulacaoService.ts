import { response } from 'express';
import { getRepository } from 'typeorm';

import Tabulacao from '../models/Tabulacao';

interface Request {
    nomeCliente: string;
    protocoloAtendimento: string;
    dataAtendimento: Date;
    numeroBinado: string;
    numeroAcesso: string;
}

class CreateTabulacaoService {
    public async execute({nomeCliente, protocoloAtendimento, dataAtendimento, numeroBinado, numeroAcesso}: Request): Promise<Tabulacao> {
        try {
            const tabulacaoRepository = getRepository(Tabulacao);

            const tabulacao = tabulacaoRepository.create({
                nomeCliente,
                protocolo: protocoloAtendimento,
                dataAtendimento,
                numeroBinado,
                numeroAcesso
            })

            await tabulacaoRepository.save(tabulacao);

            return tabulacao;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default CreateTabulacaoService;