import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1723829787056 implements MigrationInterface {
    name = 'Default1723829787056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contactEmails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "contactId" uuid, CONSTRAINT "PK_4177674ac71ad23072af6d2e52f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contactPhones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" text NOT NULL, "contact_id" uuid, CONSTRAINT "PK_c27f22fe6dcb9a8d588eb312d4b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "userId" uuid, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contactEmails" ADD CONSTRAINT "FK_94b76448f9ac3724d3c7d8c114a" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contactPhones" ADD CONSTRAINT "FK_598177833a85c88ec53e1d796c3" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`ALTER TABLE "contactPhones" DROP CONSTRAINT "FK_598177833a85c88ec53e1d796c3"`);
        await queryRunner.query(`ALTER TABLE "contactEmails" DROP CONSTRAINT "FK_94b76448f9ac3724d3c7d8c114a"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "contactPhones"`);
        await queryRunner.query(`DROP TABLE "contactEmails"`);
    }

}
