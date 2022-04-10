import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { School } from "./school.entity";
import { User } from "./user.entity";

@Entity()
export class SchoolUser {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => School, (school) => school.group)
	school: School;

	@ManyToOne(() => User, (user) => user.schoolUser)
	user: User;

	@Column({ name: 'status', type: 'boolean' })
	status: boolean;
}