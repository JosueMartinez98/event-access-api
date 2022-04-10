import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group.entity";
import { Student } from "./student.entity";

@Entity()
export class Assistance {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Group, (group) => group.assistance)
	group: Group;

	@ManyToOne(() => Student, (student) => student.assistance)
	student: Student;

	@Column({ name: 'type', type: 'varchar' })
	type: string;

	@Column({ name: 'datetime', type: 'timestamp' })
	datetime: Date;

}