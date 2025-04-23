import { forwardRef, Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { MongooseModule } from '@nestjs/mongoose';
import LikeSchema from '../../schemas/Like.model';
import NotificationSchema from '../../schemas/Notification.model';
import { NotificationModule } from '../notification/notification.module';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Like',
				schema: LikeSchema,
			},
		]),
		NotificationModule,
		forwardRef(() => MemberModule),
	],
	providers: [LikeService],
	exports: [LikeService],
})
export class LikeModule {}
