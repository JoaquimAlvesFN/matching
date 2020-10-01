import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import Gravacao from './Gravacao';
import Tabulacao from './Tabulacao';

@Entity('matchs')
class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'uuid'})
    gravacao_id: string;

    @OneToOne(() => Gravacao)
    @JoinColumn({name: 'gravacao_id'})
    gravacao: Gravacao;

    @Column({type: 'uuid'})
    tabulacao_id: string;

    @OneToOne(() => Tabulacao)
    @JoinColumn({name: 'tabulacao_id'})
    tabulacao: Tabulacao;
}

export default Match;