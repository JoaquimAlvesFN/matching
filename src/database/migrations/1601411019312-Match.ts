import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class Match1601411019312 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'matchs',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'},
                    {name: 'gravacao_id', type: 'uuid', isUnique: true, isNullable: false},
                    {name: 'tabulacao_id', type: 'uuid', isUnique: true, isNullable: false},
                ]
            })
        );
        
        await queryRunner.createForeignKey('matchs', new TableForeignKey({
            name: 'MatchGravacoes',
            columnNames: ['gravacao_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'gravacoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

        await queryRunner.createForeignKey('matchs', new TableForeignKey({
            name: 'MatchTabulacoes',
            columnNames: ['tabulacao_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tabulacoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('matchs', 'MatchTabulacoes');
        await queryRunner.dropForeignKey('matchs', 'MatchGravacoes');
        await queryRunner.dropTable('matchs');
    }

}
