import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NoticeService } from './notice.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { Notice } from '../../libs/dto/notice/notice';
import { NoticeInput } from '../../libs/dto/notice/notice.input';
import { RolesGuard } from '../auth/guards/roles.guard';
import { MemberType } from '../../libs/enums/member.enum';
import { WithoutGuard } from '../auth/guards/without.guard';
import { shapeIntoMongoObjectId } from '../../libs/config';

@Resolver()
export class NoticeResolver {
	constructor(private readonly noticeService: NoticeService) {}
	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Notice)
	public async noticeCreate(@Args('input') input: NoticeInput): Promise<Notice> {
		console.log('Mutation noticeCreate');

		return this.noticeService.noticeCreate(input);
	}

	@UseGuards(WithoutGuard)
	@Query(() => [Notice])
	public async getNotice(): Promise<Notice[]> {
		console.log('Mutation noticeCreate');

		return this.noticeService.getNotice();
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Notice)
	public async deleteNotice(@Args('id') id: string): Promise<Notice> {
		console.log('Mutation deleteNotice');
		const shape = shapeIntoMongoObjectId(id);
		return this.noticeService.deleteNotice(shape);
	}
}
