import {MigrationInterface, QueryRunner} from "typeorm";

export class refactorNameRelationships1649609508293 implements MigrationInterface {
    name = 'refactorNameRelationships1649609508293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group_student" DROP CONSTRAINT "FK_495a98dd28270998f01e15028de"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP CONSTRAINT "FK_6c73f99589bd160c0dcadb02b10"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP CONSTRAINT "FK_7d146e9a8e03c6f4adc5721de63"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP CONSTRAINT "FK_dc5fb57b9c6001968eeebda204a"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_cfefa13e83efee40adf9fe77168"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_ff59dd2609267d939295affa2cb"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_a8da0928d3b861972b345af83ea"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP CONSTRAINT "FK_4756f70682132412cb4cdda1aac"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP CONSTRAINT "FK_f82e559ca22a9a4c8874db0a489"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP COLUMN "groupFkId"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP COLUMN "studentFkId"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP COLUMN "schoolFkId"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP COLUMN "userFkId"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "REL_a8da0928d3b861972b345af83e"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "courseFkId"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "schoolFkId"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "teacherFkId"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP COLUMN "groupFkId"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP COLUMN "studentFkId"`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD "groupId" integer`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD "schoolId" integer`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD "schoolId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD "teacherId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD "courseId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "UQ_39caf5d075ae8a8d384fda66951" UNIQUE ("courseId")`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD "groupId" integer`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD CONSTRAINT "FK_b151421d7496a68a81f27fc0d79" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD CONSTRAINT "FK_b72a296bfb67e2150f60a58d526" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD CONSTRAINT "FK_414383e1bc95a2c691ddfd7a49f" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD CONSTRAINT "FK_85a63063b7de70a37efc967c156" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_adbd8bac3970d4a6c53711cb090" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_9a85fd90f7e33eb0265e76af9c7" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_39caf5d075ae8a8d384fda66951" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD CONSTRAINT "FK_f25b21e85dfe80eebfb351bad58" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD CONSTRAINT "FK_695f2f3c4ea38e498a503ea2c96" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assistance" DROP CONSTRAINT "FK_695f2f3c4ea38e498a503ea2c96"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP CONSTRAINT "FK_f25b21e85dfe80eebfb351bad58"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_39caf5d075ae8a8d384fda66951"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_9a85fd90f7e33eb0265e76af9c7"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_adbd8bac3970d4a6c53711cb090"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP CONSTRAINT "FK_85a63063b7de70a37efc967c156"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP CONSTRAINT "FK_414383e1bc95a2c691ddfd7a49f"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP CONSTRAINT "FK_b72a296bfb67e2150f60a58d526"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP CONSTRAINT "FK_b151421d7496a68a81f27fc0d79"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "assistance" DROP COLUMN "groupId"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "UQ_39caf5d075ae8a8d384fda66951"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "courseId"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "teacherId"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "schoolId"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "school_user" DROP COLUMN "schoolId"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "group_student" DROP COLUMN "groupId"`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD "studentFkId" integer`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD "groupFkId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD "teacherFkId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD "schoolFkId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD "courseFkId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "REL_a8da0928d3b861972b345af83e" UNIQUE ("courseFkId")`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD "userFkId" integer`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD "schoolFkId" integer`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD "studentFkId" integer`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD "groupFkId" integer`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD CONSTRAINT "FK_f82e559ca22a9a4c8874db0a489" FOREIGN KEY ("studentFkId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assistance" ADD CONSTRAINT "FK_4756f70682132412cb4cdda1aac" FOREIGN KEY ("groupFkId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_a8da0928d3b861972b345af83ea" FOREIGN KEY ("courseFkId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_ff59dd2609267d939295affa2cb" FOREIGN KEY ("teacherFkId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_cfefa13e83efee40adf9fe77168" FOREIGN KEY ("schoolFkId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD CONSTRAINT "FK_dc5fb57b9c6001968eeebda204a" FOREIGN KEY ("userFkId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_user" ADD CONSTRAINT "FK_7d146e9a8e03c6f4adc5721de63" FOREIGN KEY ("schoolFkId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD CONSTRAINT "FK_6c73f99589bd160c0dcadb02b10" FOREIGN KEY ("studentFkId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_student" ADD CONSTRAINT "FK_495a98dd28270998f01e15028de" FOREIGN KEY ("groupFkId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
