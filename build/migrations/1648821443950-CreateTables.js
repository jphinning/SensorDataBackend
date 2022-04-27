"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1648821443950 = void 0;
class CreateTables1648821443950 {
    constructor() {
        this.name = "CreateTables1648821443950";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "sensor_entity" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, "createDateColumn" TIMESTAMP NOT NULL DEFAULT now(), "updateDateColumn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3e9786dddcec490648500a285e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createDateColumn" TIMESTAMP NOT NULL DEFAULT now(), "updateDateColumn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "sensor_entity"`);
    }
}
exports.CreateTables1648821443950 = CreateTables1648821443950;
//# sourceMappingURL=1648821443950-CreateTables.js.map