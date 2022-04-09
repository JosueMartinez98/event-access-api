import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group.entity";
import { Student } from "./student.entity";

@Entity()
export class GroupStudent {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Group, (group) => group.groupStudentFk)
	groupFk: Group;	

	@ManyToOne(() => Student, (student) => student.groupStudentFk)
	studentFk: Student;

	@Column({ name: 'status', type: 'boolean' })
	status: boolean;
}