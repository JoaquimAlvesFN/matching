import {getRepository, getManager} from 'typeorm';

import Match from '../models/Match';

interface MatchDTO {
    tabulacao_id: string;
    gravacao_id: string;
}

class CreateMatchService {
    public async execute(): Promise<void> {
        try {
            const matchRepository = getRepository(Match);

            const match: MatchDTO[] = await getManager().query("SELECT gravacoes.id AS gravacao_id, tabulacoes.id AS tabulacao_id FROM tabulacoes \
                INNER JOIN gravacoes ON gravacoes.telefone = tabulacoes.\"numeroBinado\" OR \
                gravacoes.telefone = tabulacoes.\"numeroAcesso\"");

            const verifyExistsMatch: MatchDTO[] = await getManager().query("SELECT gravacao_id, tabulacao_id FROM matchs");

            const resultExistMatch: MatchDTO[] = match.filter(({ gravacao_id: id1 }) => !verifyExistsMatch.some(({ gravacao_id: id2 }) => id2 === id1));
            
            if (resultExistMatch.length > 0) {

                const createMatch = resultExistMatch.map((mathing) => {
                    return matchRepository.create({
                        gravacao_id: mathing.gravacao_id,
                        tabulacao_id: mathing.tabulacao_id
                    })
                });

                await matchRepository.save(createMatch);
                
            }


        } catch (error) {
            throw new Error(error);
        }

    }
}

export default CreateMatchService;