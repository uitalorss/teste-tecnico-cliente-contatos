import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1723764644722 implements MigrationInterface {
  name = "Default1723764644722";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "userName" text NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userName"`);
  }
}
