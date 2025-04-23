import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Contact } from '../../libs/dto/contact/contact';
import { ContactInput } from '../../libs/dto/contact/contact.input';
import { Message } from '../../libs/enums/common.enum';
import { NotificationService } from '../notification/notification.service';
import { PropertyService } from '../property/property.service';

@Injectable()
export class ContactService {
	constructor(
		@InjectModel('Contact') private readonly contactModel: Model<Contact>,
		private readonly notificationService: NotificationService,
		// private readonly propertyService: PropertyService,
	) {}

	public async createMessage(memberId: ObjectId, input: ContactInput): Promise<Contact> {
		input.memberId = memberId;

		let result = null;
		try {
			result = await this.contactModel.create(input);
		} catch (err) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
		if (!result) throw new InternalServerErrorException(Message.CREATE_FAILED);
		await this.notificationService.createContactMessage(memberId, input);

		return result;
	}
}
