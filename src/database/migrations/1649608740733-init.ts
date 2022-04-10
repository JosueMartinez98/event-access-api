import {MigrationInterface, QueryRunner} from "typeorm";

export class init1649608740733 implements MigrationInterface {
    name = 'init1649608740733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "career" character varying NOT NULL, "birthday" date NOT NULL, "phone" bigint NOT NULL, "phone_code" character varying NOT NULL, "email" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "street_number" integer NOT NULL, "interior_number" character varying NOT NULL, "generation" character varying NOT NULL, "registration_date" TIMESTAMP NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_student" ("id" SERIAL NOT NULL, "status" boolean NOT NULL, "groupFkId" integer, "studentFkId" integer, CONSTRAINT "PK_9c72988149b682af8d466a24186" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "career" character varying NOT NULL, "university" character varying NOT NULL, "birthday" date NOT NULL, "phone" bigint NOT NULL, "phone_code" character varying NOT NULL, "email" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "street_number" integer NOT NULL, "interior_number" character varying NOT NULL, "registration_date" TIMESTAMP NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school_user" ("id" SERIAL NOT NULL, "status" boolean NOT NULL, "schoolFkId" integer, "userFkId" integer, CONSTRAINT "PK_b75c78082d7ea9dff30f9aba409" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "level" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "street_number" integer NOT NULL, "interior_number" character varying NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "grade" integer NOT NULL, "schedule" character varying NOT NULL, "starts_at" TIME NOT NULL, "ends_at" TIME NOT NULL, "index" character varying NOT NULL, "status" boolean NOT NULL, "schoolFkId" integer, "teacherFkId" integer, "courseFkId" integer, CONSTRAINT "REL_a8da0928d3b861972b345af83e" UNIQUE ("courseFkId"), CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assistance" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "datetime" TIMESTAMP NOT NULL, "groupFkId" integer, "studentFkId" integer, CONSTRAINT "PK_e6ad228f6db856028050d62cd15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD CONSTRAINT "FK_495a98dd28270998f01e15028de" FOREIGN KEY ("groupFkId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD CONSTRAINT "FK_6c73f99589bd160c0dcadb02b10" FOREIGN KEY ("studentFkId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD CONSTRAINT "FK_7d146e9a8e03c6f4adc5721de63" FOREIGN KEY ("schoolFkId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD CONSTRAINT "FK_dc5fb57b9c6001968eeebda204a" FOREIGN KEY ("userFkId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_cfefa13e83efee40adf9fe77168" FOREIGN KEY ("schoolFkId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_ff59dd2609267d939295affa2cb" FOREIGN KEY ("teacherFkId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_a8da0928d3b861972b345af83ea" FOREIGN KEY ("courseFkId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD CONSTRAINT "FK_4756f70682132412cb4cdda1aac" FOREIGN KEY ("groupFkId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD CONSTRAINT "FK_f82e559ca22a9a4c8874db0a489" FOREIGN KEY ("studentFkId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assistance" DROP CONSTRAINT "FK_f82e559ca22a9a4c8874db0a489"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP CONSTRAINT "FK_4756f70682132412cb4cdda1aac"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_a8da0928d3b861972b345af83ea"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_ff59dd2609267d939295affa2cb"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_cfefa13e83efee40adf9fe77168"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP CONSTRAINT "FK_dc5fb57b9c6001968eeebda204a"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP CONSTRAINT "FK_7d146e9a8e03c6f4adc5721de63"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP CONSTRAINT "FK_6c73f99589bd160c0dcadb02b10"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP CONSTRAINT "FK_495a98dd28270998f01e15028de"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "assistance"`);
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`DROP TABLE "school"`);
        await queryRunner.query(`DROP TABLE "school_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "group_student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "course"`);
    }

}
