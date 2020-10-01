import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Tabulacao1601408612189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tabulacoes',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'},
                    {name: 'nomeCliente', type: 'varchar', isNullable: false},
                    {name: 'protocolo', type: 'varchar', isUnique: true, isNullable: false},
                    {name: 'dataAtendimento', type: 'timestamp with time zone', isNullable: false},
                    {name: 'numeroBinado', type: 'varchar', isNullable: false},
                    {name: 'numeroAcesso', type: 'varchar', isNullable: false}
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tabulacoes')
    }

}
