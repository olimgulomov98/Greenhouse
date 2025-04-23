import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { NoticeCategory, NoticeStatus } from '../../enums/notice.enum';

@InputType()
export class NoticeInput {
	@IsNotEmpty()
	@Field(() => NoticeCategory)
	noticeCategory: NoticeCategory;

	@IsNotEmpty()
	@Field(() => NoticeStatus, { defaultValue: NoticeStatus.ACTIVE })
	noticeStatus: NoticeStatus;

	@IsNotEmpty()
	@Field(() => String)
	noticeTitle: string;

	@IsOptional()
	@Field(() => String)
	noticeContent?: string;
}
