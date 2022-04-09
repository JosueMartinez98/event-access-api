import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
	
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'name', type: 'varchar' })
	name: string;

	@Column({ name: 'status', type: 'boolean' })
	status: boolean;
}