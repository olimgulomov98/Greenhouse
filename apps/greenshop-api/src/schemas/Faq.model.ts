import mongoose, { Schema } from 'mongoose';
import { FaqCategory, FaqStatus } from '../libs/enums/faq.enum';

const faqSchema = new Schema(
	{
		faqCategory: {
			type: String,
			enum: FaqCategory,
			required: true,
		},

		faqStatus: {
			type: String,
			enum: FaqStatus,
			default: FaqStatus.ACTIVE,
		},

		faqQuestion: {
			type: String,
			required: true,
		},

		faqAnswer: {
			type: String,
			required: true,
		},

		// memberId: {
		// 	type: Schema.Types.ObjectId,
		// 	required: true,
		// 	ref: 'Member',
		// },
	},
	{ timestamps: true, collection: 'faq' },
);

export default faqSchema;
