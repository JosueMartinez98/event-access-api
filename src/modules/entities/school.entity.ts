import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group.entity";
import { SchoolUser } from "./school-user.entity";

@Entity()
export class School {

	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({ name: 'name', type: 'varchar'})
	name: string;
	
	@Column({ name: 'level', type: 'varchar'})
	level: string;
	
	@Column({ name: 'street', type: 'varchar'})
	street: string;
	
	@Column({ name: 'neighborhood', type: 'varchar'})
	neighborhood: string;
	
	@Column({ name: 'street_number', type: 'integer'})
	streetNumber: number;

	@Column({ name: 'interior_number', type: 'varchar' })
	interiorNumber: string
	
	@Column({ name: 'status', type: 'boolean'})
	status: boolean;

	@OneToMany(() => Group, (group) => group.schoolFk)
	groupFk: Group[];

	@OneToMany(() => SchoolUser, (su) => su.schoolFk)
	schoolUseFk: SchoolUser[];
}