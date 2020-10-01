import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Gravacao1601409818009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'gravacoes',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'},
                    {name: 'telefone', type: 'varchar', isNullable: false},
                    {name: 'ramal', type: 'varchar', isNullable: false},
                    {name: 'dataGravacao', type: 'timestamp with time zone', isNullable: false}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('gravacoes')
    }

}
