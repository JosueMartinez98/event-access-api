import { type } from "os";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Assistance } from "./assistance.entity";
import { Course } from "./course.entity";
import { GroupStudent } from "./group-student.entity";
import { School } from "./school.entity";
import { User } from "./user.entity";

@Entity()
export class Group {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => School, (school) => school.groupFk)
	schoolFk: School;

	@ManyToOne(() => User, (user) => user.groupFk)
	teacherFk: User;

	@OneToOne(() => Course)
	@JoinColumn()
	courseFk: Course;

	@Column({ name: 'grade', type: 'integer' })
	grade: number;

	@Column({ name: 'schedule', type: 'varchar' })
	schedule: string;

	@Column({ name: 'starts_at', type: 'time' })
	startsAt: Date;

	@Column({ name: 'ends_at', type: 'time' })
	endsAt: Date;

	@Column({ name: 'index', type: 'varchar' })
	index: string;

	@Column({ name: 'status', type: 'boolean' })
	status: boolean;

	@OneToMany(() => Assistance, (assistance) => assistance.groupFk)
	assistanceFk: Assistance[];

	@OneToMany(() => GroupStudent, (gs) => gs.groupFk)
	groupStudentFk: GroupStudent[];
}