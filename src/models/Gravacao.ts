import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import Match from './Match';

@Entity('gravacoes')
class Gravacao {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    telefone: string;

    @Column()
    ramal: string;

    @OneToOne(() => Match, match => match.gravacao)
    macth: Match;

    @Column()
    dataGravacao: Date;
}

export default Gravacao;