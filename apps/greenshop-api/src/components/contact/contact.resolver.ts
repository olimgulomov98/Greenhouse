import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { UseGuards } from '@nestjs/common';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Contact } from '../../libs/dto/contact/contact';
import { ContactInput } from '../../libs/dto/contact/contact.input';
import { ObjectId } from 'mongoose';

@Resolver()
export class ContactResolver {
	constructor(private readonly contactService: ContactService) {}

	@UseGuards(AuthGuard)
	@Mutation(() => Contact)
	public async createMessage(
		@Args('input') input: ContactInput,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Contact> {
		console.log('Mutation: createMessage');
		return await this.contactService.createMessage(memberId, input);
	}
}
