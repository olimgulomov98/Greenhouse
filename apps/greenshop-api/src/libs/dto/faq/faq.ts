import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

import { FaqCategory, FaqStatus } from '../../enums/faq.enum';

@ObjectType()
export class Faq {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => FaqCategory)
	faqCategory: FaqCategory;

	@Field(() => FaqStatus, { defaultValue: FaqStatus.ACTIVE })
	faqStatus: FaqStatus;

	@Field(() => String)
	faqQuestion: string;

	@Field(() => String)
	faqAnswer: string;

	@Field(() => Date)
	createdAt: Date;
}
