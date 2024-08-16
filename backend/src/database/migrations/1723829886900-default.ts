import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1723829886900 implements MigrationInterface {
    name = 'Default1723829886900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contactEmails" DROP CONSTRAINT "FK_94b76448f9ac3724d3c7d8c114a"`);
        await queryRunner.query(`ALTER TABLE "contactEmails" RENAME COLUMN "contactId" TO "contact_id"`);
        await queryRunner.query(`ALTER TABLE "contactEmails" ADD CONSTRAINT "FK_66eba40cb278cf837d79ba2fbe8" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contactEmails" DROP CONSTRAINT "FK_66eba40cb278cf837d79ba2fbe8"`);
        await queryRunner.query(`ALTER TABLE "contactEmails" RENAME COLUMN "contact_id" TO "contactId"`);
        await queryRunner.query(`ALTER TABLE "contactEmails" ADD CONSTRAINT "FK_94b76448f9ac3724d3c7d8c114a" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
