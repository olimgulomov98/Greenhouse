import { Schema } from 'mongoose';

const MessageSchema = new Schema(
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

		messageRefId: {
			type: Schema.Types.ObjectId,
			required: true,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
	},
	{ timestamps: true, collection: 'messages' },
);

export default MessageSchema;
