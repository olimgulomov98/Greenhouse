import { Module } from '@nestjs/common';
import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';
import { MongooseModule } from '@nestjs/mongoose';
import NotificationSchema from '../../schemas/Notification.model';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { AuthModule } from '../auth/auth.module';
import PropertySchema from '../../schemas/Property.model';
import BoardArticleSchema from '../../schemas/BoardArticle.model';
import MemberSchema from '../../schemas/Member.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Notification', schema: NotificationSchema },
			{ name: 'Property', schema: PropertySchema },
			{ name: 'BoardArticle', schema: BoardArticleSchema },
			{ name: 'Member', schema: MemberSchema },
		]),
	],
	providers: [NotificationService, NotificationResolver],
	exports: [NotificationService],
})
export class NotificationModule {}
