import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Faq } from '../../libs/dto/faq/faq';
import { Model } from 'mongoose';
import { FaqInput } from '../../libs/dto/faq/faq.input';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class FaqService {
	@InjectModel('Faq') private readonly faqModel: Model<Faq>;

	public async faqCreate(input: FaqInput): Promise<Faq> {
		try {
			return await this.faqModel.create(input);
		} catch (err) {
			console.log('Error. Service.model', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}

	public async getFaq(): Promise<Faq[]> {
		return await this.faqModel.find();
	}
}
