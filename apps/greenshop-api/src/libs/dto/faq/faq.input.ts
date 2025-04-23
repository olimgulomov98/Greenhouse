import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { FaqCategory, FaqStatus } from '../../enums/faq.enum';

@InputType()
export class FaqInput {
	@IsNotEmpty()
	@Field(() => FaqCategory)
	faqCategory: FaqCategory;

	@IsNotEmpty()
	@Field(() => FaqStatus, { defaultValue: FaqStatus.ACTIVE })
	faqStatus: FaqStatus;

	@IsNotEmpty()
	@Field(() => String)
	faqQuestion: string;

	@IsNotEmpty()
	@Field(() => String)
	faqAnswer: string;
}
