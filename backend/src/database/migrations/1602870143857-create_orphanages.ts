import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrphanages1602870143857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // To modify the database
        // e.g. create new table, create new field, delete some field...
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Undo everything that was done by "public async up"
    }

}
