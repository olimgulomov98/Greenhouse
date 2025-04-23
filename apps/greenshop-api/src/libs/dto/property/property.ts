import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { PropertyCategories, PropertyStatus, PropertyType } from '../../enums/property.enum';
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

@ObjectType()
export class Property {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => PropertyType)
	propertyType: PropertyType;

	@Field(() => PropertyStatus)
	propertyStatus: PropertyStatus;

	@Field(() => PropertyCategories)
	propertyCategories: PropertyCategories;

	@Field(() => String)
	propertyAddress: string;

	@Field(() => String)
	propertyTitle: string;

	@Field(() => Number)
	propertyPrice: number;

	@Field(() => Number)
	propertyDiscountPrice: number;

	@Field(() => Int)
	propertyViews: number;

	@Field(() => Int)
	propertyLikes: number;

	@Field(() => Int)
	propertyComments: number;

	@Field(() => Int)
	propertyRank: number;

	@Field(() => [String])
	propertyImages: string[];

	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	/* From Aggregation */
	@Field(() => [MeLiked], { nullable: true })
	meLiked?: MeLiked[];

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Properties {
	@Field(() => [Property])
	list: Property[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}
