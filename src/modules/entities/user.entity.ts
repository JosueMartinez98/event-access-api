import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group.entity";
import { SchoolUser } from "./school-user.entity";

@Entity()
export class User {
	
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({ name: 'name', type: 'varchar'})
	name: string
	
	@Column({ name: 'last_name', type: 'varchar'})
	lastName: string;

	@Column({ name: 'username', type: 'varchar'})
	username: string;

	@Column({ name: 'password', type: 'varchar'})
	password: string;

	@Column({ name: 'career', type: 'varchar'})
	career: string;

	@Column({ name: 'university', type: 'varchar'})
	university: string;

	@Column({ name: 'birthday', type: 'date'})
	birthday: Date;

	@Column({ name: 'phone', type: 'bigint'})
	phone: number;

	@Column({ name: 'phone_code', type: 'varchar'})
	phoneCode: string;

	@Column({ name: 'email', type: 'varchar' })
	email: string;

	@Column({ name: 'street', type: 'varchar' })
	street: string;

	@Column({ name: 'neighborhood', type: 'varchar'})
	neighborhood: string;

	@Column({ name: 'street_number', type: 'integer'})
	streetNumber: number;

	@Column({ name: 'interior_number', type: 'varchar' })
	interiorNumber: string

	@Column({ name: 'registration_date', type: 'timestamp'})
	registrationDate: Date;

	@Column({ name: 'status', type: 'boolean'})
	status: boolean;

	@OneToMany(() => Group, (group) => group.teacher)
	group: Group[]

	@OneToMany(() => SchoolUser, (su) => su.user)
	schoolUser: SchoolUser[];
}