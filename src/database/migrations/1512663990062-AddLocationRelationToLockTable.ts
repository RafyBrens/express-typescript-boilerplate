import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddUserRelationToPetTable1512663990063 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_lock_location',
        columnNames: ['LocationId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'location',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('lock', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('lock', this.tableForeignKey);
    }

}
