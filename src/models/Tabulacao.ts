import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import Match from './Match';

@Entity('tabulacoes')
class Tabulacao {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nomeCliente: string;

    @Column()
    protocolo: string;

    @Column()
    dataAtendimento: Date;

    @Column()
    numeroBinado: string;

    @Column()
    numeroAcesso: string;

    @OneToOne(() => Match, match => match.tabulacao)
    match: Match;
}

export default Tabulacao;