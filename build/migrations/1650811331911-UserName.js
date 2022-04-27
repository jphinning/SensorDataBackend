"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName1650811331911 = void 0;
class UserName1650811331911 {
    constructor() {
        this.name = 'UserName1650811331911';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "name" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "name"`);
    }
}
exports.UserName1650811331911 = UserName1650811331911;
//# sourceMappingURL=1650811331911-UserName.js.map