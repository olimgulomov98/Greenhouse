import { registerEnumType } from '@nestjs/graphql';

export enum FaqCategory {
	PROPERTY = 'PROPERTY',
	PAYMENT = 'PAYMENT',
	FOR_BUYERS = 'FOR_BUYERS',
	FOR_AGENTS = 'FOR_AGENTS',
	MEMBERSHIP = 'MEMBERSHIP',
	COMMUNITY = 'COMMUNITY',
	OTHER = 'OTHER',
}
registerEnumType(FaqCategory, {
	name: 'FaqCategory',
});

export enum FaqStatus {
	HOLD = 'HOLD',
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}
registerEnumType(FaqStatus, {
	name: 'FaqStatus',
});
