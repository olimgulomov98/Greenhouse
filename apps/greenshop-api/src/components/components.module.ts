import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { NotificationModule } from './notification/notification.module';
import { NoticeModule } from './notice/notice.module';
import { FaqModule } from './faq/faq.module';
import { ContactModule } from './contact/contact.module';

@Module({
	imports: [
		MemberModule,
		AuthModule,
		PropertyModule,
		BoardArticleModule,
		LikeModule,
		ViewModule,
		CommentModule,
		FollowModule,
		NotificationModule,
		NoticeModule,
		FaqModule,
		ContactModule,
	],
})
export class ComponentsModule {}
