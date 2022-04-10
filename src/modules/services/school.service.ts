import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolUser } from '../entities/school-user.entity';
import { School } from '../entities/school.entity';

@Injectable()
export class SchoolService {

	constructor(
		@InjectRepository(School) private _schoolRepository: Repository<School>,
		@InjectRepository(SchoolUser) private _schoolUserRepository: Repository<SchoolUser>,
	){}


}
