import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1723764483971 implements MigrationInterface {
  name = "Default1723764483971";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "userPhones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" text NOT NULL, "user_id" uuid, CONSTRAINT "PK_6bda65c36d3bc54812fdc92c1db" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "userEmails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "user_id" uuid, CONSTRAINT "PK_a3e504a985376857a6b7f3a9a09" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "userPhones" ADD CONSTRAINT "FK_066c228e47617a3ae7c78d58fe7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "userEmails" ADD CONSTRAINT "FK_a9e29758f06ea5a636aa66d814e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "userEmails" DROP CONSTRAINT "FK_a9e29758f06ea5a636aa66d814e"`);
    await queryRunner.query(`ALTER TABLE "userPhones" DROP CONSTRAINT "FK_066c228e47617a3ae7c78d58fe7"`);
    await queryRunner.query(`DROP TABLE "userEmails"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "userPhones"`);
  }
}
