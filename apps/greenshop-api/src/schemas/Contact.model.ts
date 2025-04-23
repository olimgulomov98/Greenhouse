import { Schema } from 'mongoose';

const ContactSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},

		message: {
			type: String,
			required: true,
		},

		contactRefId: {
			type: Schema.Types.ObjectId,
			required: true,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
	},
	{ timestamps: true, collection: 'contact' },
);

export default ContactSchema;
