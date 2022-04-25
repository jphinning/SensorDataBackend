import {MigrationInterface, QueryRunner} from "typeorm";

export class UserName1650811331911 implements MigrationInterface {
    name = 'UserName1650811331911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "name"`);
    }

}
