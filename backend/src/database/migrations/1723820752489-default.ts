import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1723820752489 implements MigrationInterface {
  name = "Default1723820752489";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "userPhones" DROP CONSTRAINT "FK_066c228e47617a3ae7c78d58fe7"`);
    await queryRunner.query(`ALTER TABLE "userEmails" DROP CONSTRAINT "FK_a9e29758f06ea5a636aa66d814e"`);
    await queryRunner.query(
      `ALTER TABLE "userPhones" ADD CONSTRAINT "FK_066c228e47617a3ae7c78d58fe7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "userEmails" ADD CONSTRAINT "FK_a9e29758f06ea5a636aa66d814e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "userEmails" DROP CONSTRAINT "FK_a9e29758f06ea5a636aa66d814e"`);
    await queryRunner.query(`ALTER TABLE "userPhones" DROP CONSTRAINT "FK_066c228e47617a3ae7c78d58fe7"`);
    await queryRunner.query(
      `ALTER TABLE "userEmails" ADD CONSTRAINT "FK_a9e29758f06ea5a636aa66d814e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "userPhones" ADD CONSTRAINT "FK_066c228e47617a3ae7c78d58fe7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
