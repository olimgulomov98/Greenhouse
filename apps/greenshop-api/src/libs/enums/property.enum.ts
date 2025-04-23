import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	SMALL = 'SMALL',
	MEDIUM = 'MEDIUM',
	LARGE = 'LARGE',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyCategories {
	HOUSEPLANTS = 'HOUSEPLANTS',
	SEEDS = 'SEEDS',
	GARDENING = 'GARDENING',
	SUCCULENTS = 'SUCCULENTS',
	TERRARIUMS = 'TERRARIUMS',
	SMALLPLANTS = 'SMALLPLANTS',
	POTTERPLANTS = 'POTTERPLANTS',
	ACCESSORIES = 'ACCESSORIES',
}
registerEnumType(PropertyCategories, {
	name: 'PropertyCategories',
});
