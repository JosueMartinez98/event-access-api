import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group.entity";
import { Student } from "./student.entity";

@Entity()
export class GroupStudent {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Group, (group) => group.groupStudent)
	group: Group;	

	@ManyToOne(() => Student, (student) => student.groupStudent)
	student: Student;

	@Column({ name: 'status', type: 'boolean' })
	status: boolean;
}