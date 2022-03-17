"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1647542175699 = void 0;
class CreateUserTable1647542175699 {
    constructor() {
        this.name = "CreateUserTable1647542175699";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "sensor_entity" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, "createDateColumn" TIMESTAMP NOT NULL DEFAULT now(), "updateDateColumn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3e9786dddcec490648500a285e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "createDateColumn" TIMESTAMP NOT NULL DEFAULT now(), "updateDateColumn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "sensor_entity"`);
    }
}
exports.CreateUserTable1647542175699 = CreateUserTable1647542175699;
//# sourceMappingURL=1647542175699-CreateUserTable.js.map