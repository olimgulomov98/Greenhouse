import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class ContactInput {
	@IsNotEmpty()
	@Field(() => String)
	name: string;

	@IsNotEmpty()
	@Field(() => String)
	phone: string;

	@IsNotEmpty()
	@Field(() => String)
	email: string;

	@IsNotEmpty()
	@Field(() => String)
	message: string;

	@IsNotEmpty()
	@Field(() => String)
	contactRefId: ObjectId;

	memberId?: ObjectId;
}
