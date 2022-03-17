"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1647539520985 = void 0;
class CreateTables1647539520985 {
    constructor() {
        this.name = "CreateTables1647539520985";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "sensor_entity" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, "createDateColumn" TIMESTAMP NOT NULL DEFAULT now(), "updateDateColumn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3e9786dddcec490648500a285e1" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "sensor_entity"`);
    }
}
exports.CreateTables1647539520985 = CreateTables1647539520985;
//# sourceMappingURL=1647539520985-CreateTables.js.map